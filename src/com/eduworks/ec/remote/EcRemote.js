const { default: axios } = require("axios");

/**
 *  Wrapper to handle all remote web service invocations.
 * 
 *  @author fritz.ray@eduworks.com
 *  @author devlin.junker@eduworks.com
 *  @class EcRemote
 *  @module com.eduworks.ec
 */
class EcRemote{
    /**
     *  Timeout for AJAX requests
     * 
     *  @property async
     *  @static
     *  @type boolean
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
        EcRemote.postInner(server, service, fd, null, EcRemote.getSuccessJSONCallback(success, failure), failure);
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
        EcRemote.postInner(server, service, fd, null, success, failure);
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
        EcRemote.postInner(server, service, fd, headers, success, failure);
    };
    static async postInner(server, service, fd, headers, successCallback, failureCallback) {
        var url = server;
        if (!url.endsWith("/") && service != null && !"".equals(service)) {
            url += "/";
        }
        if (service != null) {
            url += service;
        }
        url = EcRemote.upgradeHttpToHttps(url);
        headers = JSON.parse(JSON.stringify(headers));
        let ret = axios.post(fd,url,{
            headers: headers
        });
        console.log(url);
        if (successCallback !== undefined && successCallback != null)
            ret.then(successCallback);
        if (successCallback !== undefined && failureCallback != null)
            ret.catch(failureCallback);
        if (EcRemote.async)
            ret = await ret;
        return ret;
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
        EcRemote.getExpectingString(server, service, EcRemote.getSuccessJSONCallback(success, failure), failure);
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
        var xhr = null;
        if ((typeof httpStatus) == "undefined") {
            xhr = new XMLHttpRequest();
            xhr.open("GET", url, EcRemote.async);
            var xhrx = xhr;
            xhr.onreadystatechange = function() {
                if (xhrx.readyState == 4 && xhrx.status == 200) 
                    if (success != null) 
                        success(xhrx.responseText);
                     else if (xhrx.readyState == 4) 
                        if (failure != null) 
                            failure(xhrx.responseText);
            };
            xhr.onerror = function(e) {
                if (failure != null) {
                    failure(null);
                }
            };
        }
        if ((typeof isNodeJs) != "undefined" && EcRemote.async) {
            var requestObject = new Object();
            (requestObject)["method"] = "GET";
            (requestObject)["url"] = url;
            request(requestObject, function(error, response, body) {
                if (failure != null && error != null) 
                    failure(error);
                 else if (failure != null && (response)["statusCode"] != 200) 
                    failure(body);
                 else if (success != null) 
                    success(body);
            });
            return;
        }
        if (xhr != null) {
            if (EcRemote.async) 
                (xhr)["timeout"] = EcRemote.timeout;
        }
        if ((typeof httpStatus) != "undefined") {
            if (success != null) 
                success(JSON.stringify(httpGet(url)));
        } else {
            xhr.send();
        }
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
        var xhr = null;
        if ((typeof httpStatus) == "undefined") {
            xhr = new XMLHttpRequest();
            xhr.open("DELETE", url, EcRemote.async);
            var xhrx = xhr;
            xhr.onreadystatechange = function() {
                if (xhrx.readyState == 4 && xhrx.status == 200) {
                    if (success != null) 
                        success(xhrx.responseText);
                } else if (xhrx.readyState == 4) {
                    if (failure != null) 
                        failure(xhrx.responseText);
                }
            };
        }
        if ((typeof isNodeJs) != "undefined" && EcRemote.async) {
            var sso = new Object();
            (sso)["signatureSheet"] = signatureSheet;
            var requestObject = new Object();
            (requestObject)["method"] = "DELETE";
            (requestObject)["url"] = url;
            (requestObject)["headers"] = sso;
            request(requestObject, function(error, response, body) {
                if (failure != null && error != null) 
                    failure(error);
                 else if (failure != null && (response)["statusCode"] != 200) 
                    failure(body);
                 else if (success != null) 
                    success(body);
            });
            return;
        }
        if (xhr != null) {
            if (EcRemote.async) 
                (xhr)["timeout"] = EcRemote.timeout;
            xhr.setRequestHeader("signatureSheet", signatureSheet);
        }
        if ((typeof httpStatus) != "undefined") {
            if (success != null) {
                var sso = new Object();
                (sso)["signatureSheet"] = signatureSheet;
                success(httpDelete(url, null, null, null, sso));
            }
        } else {
            xhr.send();
        }
    };
    static upgradeHttpToHttps(url) {
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
