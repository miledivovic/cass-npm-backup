const { default: axios } = require("axios");

/**
 *  Wrapper to handle all remote web service invocations.
 * 
 *  @author fritz.ray@eduworks.com
 *  @author devlin.junker@eduworks.com
 *  @class EcRemote
 *  @module com.eduworks.ec
 */
module.exports = class EcRemote{

    static set async(value)
    {
        console.trace("DISCONTINUED: Instead of setting EcRemote.async, please use await.");
    }
    static get async()
    {
        console.trace("DISCONTINUED: Don't rely on async.");
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
        return EcRemote.postInner(server, service, fd, null, EcRemote.getSuccessJSONCallback(success, failure), failure);
    };
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
    };
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
    static postWithHeadersExpectingString(server, service, fd, headers, success, failure) {
        return EcRemote.postInner(server, service, fd, headers, success, failure);
    };
    static postInner(server, service, fd, headers, successCallback, failureCallback) {
        var url = server;
        if (!url.endsWith("/") && service != null && !"".equals(service)) {
            url += "/";
        }
        if (service != null) {
            url += service;
        }
        url = EcRemote.upgradeHttpToHttps(url);
        headers = JSON.parse(JSON.stringify(headers));
        let p = axios.post(url,fd,{
            headers: headers
        });
        return cassPromisify(p,successCallback,failureCallback);
    };
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
        return EcRemote.getExpectingString(server, service, EcRemote.getSuccessJSONCallback(success, failure), failure);
    };
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
        let p = axios.get(url,{
            headers: headers
        });
        return cassPromisify(p,success,failure);
    };
    static urlAppend(server, service) {
        var url = server;
        if (!url.endsWith("/") && service != null && service.equals("")) {
            url += "/";
        }
        if (service != null) {
            url += service;
        }
        return url;
    };
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
        let p = axios.delete(url,{
            headers: {signatureSheet:signatureSheet}
        });
        return cassPromisify(p,success,failure);
    };
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
    };
    static getSuccessJSONCallback(success, failure) {
        return function(s) {
            var o;
            try {
                o = JSON.parse(s);
            }catch (ex) {
                if (failure != null)
                {
                    if (ex == null)
                        failure("An unspecified error occurred during a network request.");
                    else 
                        failure(ex);
                }
                return;
            }
            success(o);
        };
    };
}
