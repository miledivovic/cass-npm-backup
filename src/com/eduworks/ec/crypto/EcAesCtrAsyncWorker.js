/**
 *  Asynchronous implementation of {{#crossLink
 *  "EcAesCtr"}}EcAesCtr{{/crossLink}}. Uses web workers and assumes 8 workers.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class EcAesCtrAsyncWorker
 *  @module com.eduworks.ec
 */
var EcAesCtrAsyncWorker = function() {};
EcAesCtrAsyncWorker = stjs.extend(EcAesCtrAsyncWorker, null, [], function(constructor, prototype) {
    constructor.rotator = 0;
    constructor.w = null;
    constructor.q1 = null;
    constructor.q2 = null;
    constructor.initWorker = function() {
        if (window == null && ((typeof self).equals("undefined")) || Worker == undefined || Worker == null) {
            return;
        }
        if (!EcRemote.async) {
            return;
        }
        if (EcAesCtrAsyncWorker.w != null) {
            return;
        }
        EcAesCtrAsyncWorker.rotator = 0;
        EcAesCtrAsyncWorker.q1 = new Array();
        EcAesCtrAsyncWorker.q2 = new Array();
        EcAesCtrAsyncWorker.w = new Array();
        for (var index = 0; index < 8; index++) {
            EcAesCtrAsyncWorker.createWorker(index);
        }
    };
    constructor.createWorker = function(index) {
        EcAesCtrAsyncWorker.q1.push(new Array());
        EcAesCtrAsyncWorker.q2.push(new Array());
        var wkr;
        if ((window)["scriptPath"] != null) 
            EcAesCtrAsyncWorker.w.push(wkr = new Worker((window)["scriptPath"] + "forgeAsync.js"));
         else 
            EcAesCtrAsyncWorker.w.push(wkr = new Worker("forgeAsync.js"));
        wkr.onmessage = function(p1) {
            var o = p1.data;
            var success = EcAesCtrAsyncWorker.q1[index].shift();
            var failure = EcAesCtrAsyncWorker.q2[index].shift();
            if ((o)["error"] != null) {
                if (failure != null) 
                    failure((o)["error"]);
            } else if (success != null) {
                success((o)["result"]);
            }
        };
        wkr.onerror = function(p1) {
            var success = EcAesCtrAsyncWorker.q1[index].shift();
            var failure = EcAesCtrAsyncWorker.q2[index].shift();
            if (failure != null) {
                failure(p1.toString());
            }
        };
    };
    /**
     *  Asynchronous form of {{#crossLink
     *  "EcAesCtr/encrypt:method"}}EcAesCtr.encrypt{{/crossLink}}
     * 
     *  @param {string}           plaintext Text to encrypt.
     *  @param {string}           secret Secret to use to encrypt.
     *  @param {string}           iv Initialization Vector to use to encrypt.
     *  @param {function(string)} success Success method, result is Base64
     *                            encoded Ciphertext.
     *  @param {function(string)} failure Failure method, parameter is error
     *                            message.
     *  @method encrypt
     *  @static
     */
    constructor.encrypt = function(plaintext, secret, iv, success, failure) {
        EcAesCtrAsyncWorker.initWorker();
        if (!EcRemote.async || EcAesCtrAsyncWorker.w == null) {
            success(EcAesCtr.encrypt(plaintext, secret, iv));
        } else {
            var worker = EcAesCtrAsyncWorker.rotator++;
            EcAesCtrAsyncWorker.rotator = EcAesCtrAsyncWorker.rotator % 8;
            var o = new Object();
            (o)["secret"] = secret;
            (o)["iv"] = iv;
            (o)["text"] = forge.util.encodeUtf8(plaintext);
            (o)["cmd"] = "encryptAesCtr";
            EcAesCtrAsyncWorker.q1[worker].push(success);
            EcAesCtrAsyncWorker.q2[worker].push(failure);
            EcAesCtrAsyncWorker.w[worker].postMessage(o);
        }
    };
    /**
     *  Asynchronous form of {{#crossLink
     *  "EcAesCtr/decrypt:method"}}EcAesCtr.decrypt{{/crossLink}}
     * 
     *  @param {string}           ciphertext Text to decrypt.
     *  @param {string}           secret Secret to use to decrypt.
     *  @param {string}           iv Initialization Vector to use to decrypt.
     *  @param {function(string)} success Success method, result is Plaintext
     *                            with no encoding.
     *  @param {function(string)} failure Failure method, parameter is error
     *                            message.
     *  @method decrypt
     *  @static
     */
    constructor.decrypt = function(ciphertext, secret, iv, success, failure) {
        if (EcCrypto.caching) {
            var cacheGet = null;
            cacheGet = (EcCrypto.decryptionCache)[secret + iv + ciphertext];
            if (cacheGet != null) {
                success(cacheGet);
                return;
            }
        }
        EcAesCtrAsyncWorker.initWorker();
        if (!EcRemote.async || EcAesCtrAsyncWorker.w == null) {
            success(EcAesCtr.decrypt(ciphertext, secret, iv));
        } else {
            var worker = EcAesCtrAsyncWorker.rotator++;
            EcAesCtrAsyncWorker.rotator = EcAesCtrAsyncWorker.rotator % 8;
            var o = new Object();
            (o)["secret"] = secret;
            (o)["iv"] = iv;
            (o)["text"] = ciphertext;
            (o)["cmd"] = "decryptAesCtr";
            if (EcCrypto.caching) {
                EcAesCtrAsyncWorker.q1[worker].push(function(p1) {
                    (EcCrypto.decryptionCache)[secret + iv + ciphertext] = forge.util.decodeUtf8(p1);
                    success(forge.util.decodeUtf8(p1));
                });
            } else {
                EcAesCtrAsyncWorker.q1[worker].push(function(p1) {
                    success(forge.util.decodeUtf8(p1));
                });
            }
            EcAesCtrAsyncWorker.q2[worker].push(failure);
            EcAesCtrAsyncWorker.w[worker].postMessage(o);
        }
    };
}, {w: {name: "Array", arguments: [{name: "Worker", arguments: ["Object"]}]}, q1: {name: "Array", arguments: [{name: "Array", arguments: ["Callback1"]}]}, q2: {name: "Array", arguments: [{name: "Array", arguments: ["Callback1"]}]}}, {});
