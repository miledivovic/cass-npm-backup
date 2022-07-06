global.axiosOptions = {};
var isNode = false;    
if (typeof process === 'object') {
  if (typeof process.versions === 'object') {
    if (typeof process.versions.node !== 'undefined') {
      isNode = true;
    }
  }
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

global.httpOptions = [];
global.http2Enabled = {};
if (global.axios == null)
{
	global.axios = require("axios");
	if (isNode)
	{
		let http2;
		let https;
		try {
			http2 = require("http2-wrapper");
			https = require("https");
		} catch(e) {
			global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemoteInitHttp2", e);
		}
		function http2AdapterEnhancer(adapter) {
			return async (config) => {
				if (config.http2 && config.url.startsWith("https")) {
					let req;
					config.transport = {
						request: function request(options, handleResponse) {
							options.ca = global.ca;
							if (http2Enabled[options.hostname])
								req = http2.request(options, handleResponse);
							else
							{
								req = https.request(options, handleResponse);
								if (http2Enabled[options.hostname] == null)					
									global.httpOptions.push(options);
							}
							return req;
						},
					};
					const ret = adapter(config);
					while (global.httpOptions.length > 0)
					{
						let options = global.httpOptions.pop();
						options.ALPNProtocols = ['h2', 'http/1.1'];
						if (options.port == null)
							options.port = 443;
						let result = await http2.auto.resolveProtocol(options);
						if (result.alpnProtocol == "http/1.1")
							http2Enabled[options.hostname] = false;
						else if (result.alpnProtocol == "h2")
							http2Enabled[options.hostname] = true;
					}

					// Remove the axios action `socket.setKeepAlive` because the HTTP/2 sockets should not be directly manipulated
					const listeners = req.listeners("socket");
					if (listeners.length) req.removeListener("socket", listeners[0]);
					return ret;
				} else {
					return adapter(config);
				}
			};
		}
		axiosOptions.http2 = true;
		axiosOptions.adapter = http2AdapterEnhancer(axios.defaults.adapter);
	}
} else {
	if (isNode)
	{
		let https;
		try {
			https = require("https");
		} catch(e) {
			global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemoteInitHttps", e);
		}
		function httpsAdapterEnhancer(adapter) {
			return async (config) => {
				if (process.env.HTTPS != null ? process.env.HTTPS.trim() == 'true' : false && config.url.startsWith("https")) {
					let req;
					config.transport = {
						request: function request(options, handleResponse) {
							options.ca = global.ca;
							req = https.request(options, handleResponse);
						return req;
						},
					};
					const ret = adapter(config);
					return ret;
				} else {
					return adapter(config);
				}
			};
		}
		axiosOptions.adapter = httpsAdapterEnhancer(axios.defaults.adapter);
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
		var url = server;
		if (!url.endsWith("/") && service != null && !("" == service)) {
			url += "/";
		}
		if (service != null) {
			url += service;
		}
		url = EcRemote.upgradeHttpToHttps(url);
		let postHeaders = null;
		if (fd.getHeaders != null)
			postHeaders = fd.getHeaders();
		else
			postHeaders = {
				'content-type': 'multipart/form-data'
			}
		if (fd.getLengthSync != null)
			postHeaders["content-length"] = fd.getLengthSync();
		if (headers !== undefined && headers != null)
			for (let header in headers) postHeaders[header] = headers[header];
		let p = axios
			.post(url, fd, {
				...axiosOptions,
				headers: postHeaders,
				maxContentLength: Infinity,
				maxBodyLength: Infinity
			})
			.then((response) => {
				global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.INFO, "EcRemotePostInner", response.request.socket ? response.request.socket.remoteAddress : '', url, postHeaders);
				return response.data;
			})
			.catch((err) => {
				if (err != null) {
					global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemotePostInner", err && err.response && err.response.request && err.response.request.socket ? err.response.request.socket.remoteAddress : '', url, postHeaders, err);
					if (err.response != null) {
						if (err.response.data != null)
							throw err.response.data;
						throw err;
					}
					throw err;
				}
				global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemotePostInner", "Internal error in Axios?");
			});
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
		var url = EcRemote.urlAppend(server, service);
		url = EcRemote.upgradeHttpToHttps(url);
		let p = axios
			.get(url,axiosOptions)
			.then((response) => {
				global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.INFO, "EcRemoteGetExpectString", response.request.socket ? response.request.socket.remoteAddress : '', url);
				return response.data;
			})
			.catch((err) => {
				global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemoteGetExpectString", err && err.response && err.response.request && err.response.request.socket ? err.response.request.socket.remoteAddress : '', url, err);
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
	static urlAppend(server, service) {
		var url = server;
		if (!url.endsWith("/") && service != null && service.equals("")) {
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
				...axiosOptions,
				headers: { signatureSheet: signatureSheet }
			})
			.then((response) => {
				global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.INFO, "EcRemoteDelete", response.request.socket ? response.request.socket.remoteAddress : '', url, signatureSheet);
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
