require("../../../../org/cassproject/general/AuditLogger.js");

global.axiosOptions = {};
global.corsOrigins = [];
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
	var {setGlobalDispatcher,Agent,fetch} = require('undici');
	setGlobalDispatcher(new Agent({
		allowH2: process.env.HTTP2 != null ? process.env.HTTP2.trim() == 'true' : true
	}))
}

if (isNode)
{
	try{
		const dns = require('node:dns');
		if (dns && dns.setDefaultResultOrder)
		{
			//Support for Node 18 using Docker containers with a network that doesn't support ipv6 loopback.
			dns.setDefaultResultOrder('ipv4first');
		}
	} 
	catch(ex){
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
			console.log('fetch response', response);
 			const contentType = response.headers.get("content-type");
			let result = null;
			if (contentType && contentType.indexOf("application/json") !== -1) {
				result = await response.json();
				console.log("is json");
			} else {
				result = await response.text();
				console.log("is text");
				try{
					result = JSON.parse(result);
				}
				catch(ex) {
					console.log("text is not json");
				}
			}		
			console.log(result);
			return result;
		}).catch((err) => {
			console.log('fetch error: ', err);
			//console.log(err.response);
			//global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemotePostInner", err && err.response && err.response.request && err.response.request.socket ? err.response.request.socket.remoteAddress : '', url, postHeaders, err);
			throw err;
		})

		
		// let p = axios.post(url, fd, {
		// 		...getAxiosOptions(url),
		// 		headers: postHeaders,
		// 		maxContentLength: Infinity,
		// 		maxBodyLength: Infinity
		// 	})
		// 	.then((response) => {
				
		// 		return response.data;
		// 	})
		// 	.catch((err) => {
		// 		if (err != null) {
		// 			global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemotePostInner", err && err.response && err.response.request && err.response.request.socket ? err.response.request.socket.remoteAddress : '', url, postHeaders, err);
		// 			if (err.response != null) {
		// 				if (err.response.data != null)
		// 					throw err.response.data;
		// 				throw err;
		// 			}
		// 			throw err;
		// 		}
		// 		else global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemotePostInner", "Internal error in Axios?");
		// 	});
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
		let url = EcRemote.urlAppend(server, service);
		url = EcRemote.upgradeHttpToHttps(url);
		let p = fetch(url).then((response) => {
			console.log('response: ', response.url);
			//global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.INFO, "EcRemoteGetExpectString", response.request.socket ? response.request.socket.remoteAddress : '', url);
			return response.json();
		}).catch((err) => {
			console.log('fetch err 2: ', err);
			console.log(err.response);
			global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemoteGetExpectString", err && err.response && err.response.request && err.response.request.socket ? err.response.request.socket.remoteAddress : '', url, err);
			throw err;
		})
		// let p = axios
		// 	.get(url,getAxiosOptions(url))
		// 	.then((response) => {
		// 		global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.INFO, "EcRemoteGetExpectString", response.request.socket ? response.request.socket.remoteAddress : '', url);
		// 		return response.data;
		// 	})
		// 	.catch((err) => {
		// 		global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemoteGetExpectString", err && err.response && err.response.request && err.response.request.socket ? err.response.request.socket.remoteAddress : '', url, err);
		// 		if (err) {
		// 			if (err.response) {
		// 				if (err.response.data)
		// 					throw err.response.data;
		// 			}
		// 			throw err.response;
		// 		}
		// 		throw err;
		// 	});
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
		url = EcRemote.upgradeHttpToHttps(url);
		let p = axios
			.delete(url, {
				...getAxiosOptions(url),
				headers: { signatureSheet: signatureSheet }
			})
			.then((response) => {
				return response.data;
			})
			.catch((err) => {
				global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemoteDelete", err && err.response && err.response.request && err.response.request.socket ? err.response.request.socket.remoteAddress : '', url, signatureSheet, err);
				if (err) {
					if (err.response) {
						if (err.response.data)
							throw err.response.data;
					}
					throw err.response;
				}
				throw err;
			});
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
