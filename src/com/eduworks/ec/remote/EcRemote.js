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


const {fetch: origFetch} = global;
global.fetch = async (...args) => {
	console.log('fetch called with args: ', args);
	const response = await origFetch(...args);
	return response;
}

let newFormData = class newFormData extends FormData {
	constructor() {
		super();
		console.log(new Error().stack);
		// var stack = new Error().stack;
		// var lastLine = stack.split('\n').pop();
		// var startIndex = lastLine.indexOf('/src/');
		// var endIndex = lastLine.indexOf('.js:') + 3;
		// return '.' + lastLine.substring(startIndex, endIndex);
	}
}

new newFormData();


let axios = {};
// if (global.axios == null)
// {
// 	let axiosModule = require("axios");
// 	if (axiosModule.default != null) 
// 		axiosModule = axiosModule.default;
// 	global.axios = axios = axiosModule;
// 	if (isNode)
// 	{
// 		let http2;
// 		let https;
// 		try {
// 			http2 = require("http2-wrapper");
// 			https = require("https");
// 		} catch(e) {
// 			global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemoteInitHttp2", e);
// 		}
// 		function http2AdapterEnhancer(adapter) {
// 			return async (config) => {
// 				if (config.http2 && config.url.startsWith("https")) {
// 					let req;
// 					if (global.ca != null)
// 						config.ca = global.ca;
// 					config.transport = {
// 						request: function request(options, handleResponse) {
// 							if (global.ca != null)
// 								options.ca = global.ca;
// 							if (http2Enabled[options.hostname])
// 								req = http2.request(options, handleResponse);
// 							else
// 							{
// 								req = https.request(options, handleResponse);
// 								if (http2Enabled[options.hostname] == null)					
// 									global.httpOptions.push(options);
// 							}
// 							return req;
// 						},
// 					};
// 					const ret = adapter(config);
// 					while (global.httpOptions.length > 0)
// 					{
// 						let options = global.httpOptions.pop();
// 						if (global.ca != null)
// 							options.cert = global.ca;
// 						options.ALPNProtocols = ['h2', 'http/1.1'];
// 						if (options.port == null || options.port == '')
// 							options.port = 443;
// 						if (options.host == null && options.hostname != null)
// 							options.host = options.hostname;
// 						let result = await http2.auto.resolveProtocol(options);
// 						if (result.alpnProtocol == "http/1.1")
// 							http2Enabled[options.hostname] = false;
// 						else if (result.alpnProtocol == "h2")
// 							http2Enabled[options.hostname] = true;
// 					}

// 					// Remove the axios action `socket.setKeepAlive` because the HTTP/2 sockets should not be directly manipulated
// 					const listeners = req.listeners("socket");
// 					if (listeners.length) req.removeListener("socket", listeners[0]);
// 					return ret;
// 				} else {
// 					return adapter(config);
// 				}
// 			};
// 		}
// 		axiosOptions.http2 = true;
// 		axiosOptions.adapter = http2AdapterEnhancer(axios.defaults.adapter);
// 	}
// } else {
// 	if (global.axios.default != null) 
// 		global.axios = global.axios.default;
// 	axios = global.axios;
// 	if (isNode)
// 	{
// 		let https;
// 		try {
// 			https = require("https");
// 		} catch(e) {
// 			global.auditLogger.report(global.auditLogger.LogCategory.NETWORK, global.auditLogger.Severity.ERROR, "EcRemoteInitHttps", e);
// 		}
// 		function httpsAdapterEnhancer(adapter) {
// 			return async (config) => {
// 				if (process.env.HTTPS != null ? process.env.HTTPS.trim() == 'true' : false && config.url.startsWith("https")) {
// 					let req;
// 					config.transport = {
// 						request: function request(options, handleResponse) {
// 							if (global.ca != null)
// 								options.ca = global.ca;
// 							req = https.request(options, handleResponse);
// 						return req;
// 						},
// 					};
// 					const ret = adapter(config);
// 					return ret;
// 				} else {
// 					return adapter(config);
// 				}
// 			};
// 		}
// 		axiosOptions.adapter = httpsAdapterEnhancer(axios.defaults.adapter);
// 	}
// }

const { cassPromisify } = require("../promises/helpers");

// let getAxiosOptions = function(url) {
// 	let newOptions = Object.assign({}, axiosOptions);
// 	if (corsOrigins.findIndex((x) => url.startsWith(x)) > -1)
// 		newOptions.withCredentials = true;
// 	return newOptions;
// }

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
		let postHeaders = null;
		if (fd.getHeaders != null)
		{
			console.log('setting headers');
			// postHeaders = fd.getHeaders();
			postHeaders = {
				'content-type': 'multipart/form-data'
			}
			console.log('headers', postHeaders);
			// postHeaders["Content-Type"] = null;
		}
		 else
		  	postHeaders = {
		  		"Content-Type": null
		  	}
		if (fd.getLengthSync != null) {
			//postHeaders["content-length"] = fd.getLengthSync();
			console.log('has getlength sync')
		}
		if (headers !== undefined && headers != null)
			for (let header in headers) postHeaders[header] = headers[header];

		console.log('postheaders', postHeaders);
		console.log('FormData', FormData);

		let p = fetch(url, {
			method: 'POST',
			body: fd,
			// headers: postHeaders,
		}).then((response) => {
			console.log('fetch response', response);
			return response.json()
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
