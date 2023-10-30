require("../../../../org/cassproject/general/AuditLogger.js");

let DEBUG = false;

let isNode = false;    
if (typeof process === 'object') {
  if (typeof process.versions === 'object') {
    if (typeof process.versions.node !== 'undefined') {
      isNode = true;
    }
  }
}
if (isNode)
{	
	let undici = eval("require('undici');");
	if (undici != null)
	{
		var {setGlobalDispatcher,Agent,fetch} = undici;
		setGlobalDispatcher(new Agent({
			allowH2: process.env.HTTP2 != null ? process.env.HTTP2.trim() == 'true' : true
		}))
	}
}
if (typeof window !== 'undefined' && window.fetch != null)
	var fetch = window.fetch;

if (isNode)
{
	try{
		var dns = require('node:dns');
		if (dns && dns.setDefaultResultOrder)
		{
			//Support for Node 18 using Docker containers with a network that doesn't support ipv6 loopback.
			dns.setDefaultResultOrder('ipv4first');
		}
	} 
	catch(ex){
		console.log(ex);
	}
}

const { cassPromisify } = require("../promises/helpers");

/**
 *  Wrapper to handle all remote web service invocations.
 *
 *  @author fritz.ray@eduworks.com
 *  @author devlin.junker@eduworks.com
 *  @class EcRemote
 *  @module com.eduworks.ec
 */
module.exports = class EcRemote {
	static set async(value) {
		console.trace(
			"DISCONTINUED: Instead of setting EcRemote.async, please use await."
		);
	}
	static get async() {
		return console.trace("DISCONTINUED: Don't rely on async.");
	}

	/**
	 *  Timeout for AJAX requests
	 *
	 *  @property timeout
	 *  @static
	 *  @type integer
	 */
	static timeout = 60 * 1000 * 5;

	/**
	 *  POSTs a request to a remote endpoint. Composed of a server endpoint (root
	 *  URL) and a service (service path). Sends form data as a multi-part mime
	 *  request.
	 *
	 *  @param {string}           server Protocol, hostname and path to the remote handler.
	 *  @param {string}           service Path to service to invoke.
	 *  @param {FormData}         fd Form data to send as multi-part mime.
	 *  @param {function(object)} success Method that is invoked if the server
	 *                            responds with a success (per jQuery ajax)
	 *  @param {function(string)} failure Method that is invoked if the server
	 *                            responds with an error (per jQuery ajax) or a non-200/300.
	 *  @method postExpectingObject
	 *  @static
	 */
	static postExpectingObject(server, service, fd, success, failure) {
		return EcRemote.postInner(server, service, fd, null, success, failure);
	}
	/**
	 *  POSTs a request to a remote endpoint. Composed of a server endpoint (root
	 *  URL) and a service (service path). Sends form data as a multi-part mime
	 *  request.
	 *
	 *  @param {string}           server Protocol, hostname and path to the remote handler.
	 *  @param {string}           service Path to service to invoke.
	 *  @param {FormData}         fd Form data to send as multi-part mime.
	 *  @param {function(string)} success Method that is invoked if the server
	 *                            responds with a success (per jQuery ajax)
	 *  @param {function(string)} failure Method that is invoked if the server
	 *                            responds with an error (per jQuery ajax) or a non-200/300.
	 *  @method postExpectingString
	 *  @static
	 */
	static postExpectingString(server, service, fd, success, failure) {
		return EcRemote.postInner(server, service, fd, null, success, failure);
	}
	/**
	 *  POSTs a request to a remote endpoint. Composed of a server endpoint (root
	 *  URL) and a service (service path). Sends form data as a multi-part mime
	 *  request. Includes headers.
	 *
	 *  @param {string}           server Protocol, hostname and path to the remote handler.
	 *  @param {string}           service Path to service to invoke.
	 *  @param {FormData}         fd Form data to send as multi-part mime.
	 *  @param {Object}           headers Headers to attach to the HTTP post.
	 *  @param {function(string)} success Method that is invoked if the server
	 *                            responds with a success (per jQuery ajax)
	 *  @param {function(string)} failure Method that is invoked if the server
	 *                            responds with an error (per jQuery ajax) or a non-200/300.
	 *  @method postWithHeadersExpectingString
	 *  @static
	 */
	static postWithHeadersExpectingString(
		server,
		service,
		fd,
		headers,
		success,
		failure
	) {
		return EcRemote.postInner(
			server,
			service,
			fd,
			headers,
			success,
			failure
		);
	}
	static postInner(
		server,
		service,
		fd,
		headers,
		successCallback,
		failureCallback
	) {
		if (DEBUG)
			console.log("POST " + server + "" + (service || "") + " " + headers + fd);
		let url = server;
		if (!url.endsWith("/") && service != null && !("" == service)) {
			url += "/";
		}
		if (service != null) {
			url += service;
		}
		url = EcRemote.upgradeHttpToHttps(url);
		
		let p = fetch(url, {
			method: 'POST',
			body: fd,
			headers: headers || {},
		}).then(async (response) => {
			if (!response.ok) {
				throw new Error(response.statusText);
			}
 			const contentType = response.headers.get("content-type");
			let result = null;
			if (contentType && contentType.indexOf("application/json") !== -1) {
				result = await response.json();
			} else {
				result = await response.text();
				try{
					result = JSON.parse(result);
				}
				catch(ex) {
					// Text is not json
				}
			}		
			return result;
		}).catch((err) => {
			if (isNode && typeof dns !== 'undefined') {
				dns.lookup(new URL(url).hostname, ((error, address) => {
					if (error) {
						global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "DNSLookup", url, error);
						global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemotePostInner", url, headers, err);
					} else {
						global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemotePostInner", address, url, headers, err);
					}
				}))
			} else {
				global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemotePostInner", url, headers, err);
			}
			
			throw err;
		})

		return cassPromisify(p, successCallback, failureCallback);
	}
	/**
	 *  GETs something from a remote endpoint. Composed of a server endpoint
	 *  (root URL) and a service (service path).
	 *
	 *  @param {string}           server Protocol, hostname and path to the remote handler.
	 *  @param {string}           service Path to service to invoke.
	 *  @param {function(object)} success Method that is invoked if the server
	 *                            responds with a success (per jQuery ajax)
	 *  @param {function(string)} failure Method that is invoked if the server
	 *                            responds with an error (per jQuery ajax) or a non-200/300.
	 *  @method getExpectingObject
	 *  @static
	 */
	static getExpectingObject(server, service, success, failure) {
		return EcRemote.getExpectingString(server, service, success, failure);
	}
	/**
	 *  GETs something from a remote endpoint. Composed of a server endpoint
	 *  (root URL) and a service (service path).
	 *
	 *  @param {string}           server Protocol, hostname and path to the remote handler.
	 *  @param {string}           service Path to service to invoke.
	 *  @param {function(object)} success Method that is invoked if the server
	 *                            responds with a success (per jQuery ajax)
	 *  @param {function(string)} failure Method that is invoked if the server
	 *                            responds with an error (per jQuery ajax) or a non-200/300.
	 *  @method getExpectingString
	 *  @static
	 */
	static getExpectingString(server, service, success, failure) {
		if (DEBUG)
			console.log("GET " + server + "" + (service || ""));
		let url = EcRemote.urlAppend(server, service);
		url = EcRemote.upgradeHttpToHttps(url);
		let p = fetch(url).then(async (response) => {
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const contentType = response.headers.get("content-type");
			let result = null;
			if (contentType && contentType.indexOf("application/json") !== -1) {
				result = await response.json();
			} else {
				result = await response.text();
				try{
					result = JSON.parse(result);
				}
				catch(ex) {
					// Text is not json
				}
			}
			if (isNode && typeof dns !== 'undefined') {
				dns.lookup(new URL(url).hostname, ((error, address) => {
					if (error) {
						global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "DNSLookup", url, error);
						global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.INFO, "EcRemoteGetExpectString", url);
					} else {
						global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.INFO, "EcRemoteGetExpectString", address, url);
					}
				}))
			} else {
				global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.INFO, "EcRemoteGetExpectString", url);
			}
			return result;
	   }).catch((err) => {
			if (isNode && typeof dns !== 'undefined') {
				dns.lookup(new URL(url).hostname, ((error, address) => {
					if (error) {
						global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "DNSLookup", url, error);
						global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemoteGetExpectString", url, err);
					} else {
						global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.INFO, "EcRemoteGetExpectString", address, url, err);
					}
				}))
			} else {
				global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.INFO, "EcRemoteGetExpectString", url, err);
			}
			throw err;
		})

		return cassPromisify(p, success, failure);
	}
	static urlAppend(server, service) {
		let url = server;
		if (!url.endsWith("/") && service != null && service == "") {
			url += "/";
		}
		if (service != null) {
			url += service;
		}
		return url;
	}
	/**
	 *  DELETEs something at a remote endpoint. Composed of a server endpoint
	 *  (root URL) and a service (service path).
	 *
	 *  @param {string}           server Protocol, hostname and path to the remote handler.
	 *  @param {string}           service Path to service to invoke.
	 *  @param {function(object)} success Method that is invoked if the server
	 *                            responds with a success (per jQuery ajax)
	 *  @param {function(string)} failure Method that is invoked if the server
	 *                            responds with an error (per jQuery ajax) or a non-200/300.
	 *  @method _delete
	 *  @static
	 */
	static _delete(url, signatureSheet, success, failure) {
		if (DEBUG)
			console.log("DELETE " + url);
		url = EcRemote.upgradeHttpToHttps(url);

		let p = fetch(url, {
			method: 'DELETE',
			headers: { signatureSheet: signatureSheet }
		}).then(async (response) => {
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const contentType = response.headers.get("content-type");
			let result = null;
			if (contentType && contentType.indexOf("application/json") !== -1) {
				result = await response.json();
			} else {
				result = await response.text();
				try{
					result = JSON.parse(result);
				}
				catch(ex) {
					// Text is not json
				}
			}		
			return result;
		}).catch((err) => {
			if (isNode && typeof dns !== 'undefined') {
				dns.lookup(new URL(url).hostname, ((error, address) => {
					if (error) {
						global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "DNSLookup", url, signatureSheet, error);
						global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemoteDelete", url, signatureSheet, err);
					} else {
						global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.INFO, "EcRemoteDelete", address, url, signatureSheet, err);
					}
				}))
			} else {
				global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.INFO, "EcRemoteDelete", url, signatureSheet, err);
			}
			throw err;
		})
		return cassPromisify(p, success, failure);
	}
	static upgradeHttpToHttps(url) {
		if (typeof window !== "undefined")
			if (window != null) {
				if (window.location != null) {
					if (url.indexOf(window.location.protocol) == -1) {
						if (window.location.protocol.startsWith("https")) {
							if (!url.startsWith("https:")) {
								url = url.replace("http:", "https:");
							}
						}
					}
				}
			}
		return url;
	}
};
