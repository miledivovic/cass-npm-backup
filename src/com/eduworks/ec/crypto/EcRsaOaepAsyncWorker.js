/**
 *  Asynchronous implementation of {{#crossLink
 *  "EcRsaOaep"}}EcRsaOaep{{/crossLink}}. Uses web workers and assumes 8 workers.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class EcRsaOaepAsyncWorker
 *  @module com.eduworks.ec
 */
module.exports = class EcRsaOaepAsyncWorker{
    static rotator = 0;
    static w = null;
    static q1 = null;
    static q2 = null;
    static initWorker() {
        if (typeof window === "undefined" || window == null && ((typeof self).equals("undefined")) || Worker == undefined || Worker == null) {
            return;
        }
        if (!EcRemote.async) {
            return;
        }
        if (EcRsaOaepAsyncWorker.w != null) {
            return;
        }
        EcRsaOaepAsyncWorker.rotator = 0;
        EcRsaOaepAsyncWorker.q1 = new Array();
        EcRsaOaepAsyncWorker.q2 = new Array();
        EcRsaOaepAsyncWorker.w = new Array();
        for (var index = 0; index < 8; index++) {
            EcRsaOaepAsyncWorker.createWorker(index);
        }
    };
    static createWorker(index) {
        EcRsaOaepAsyncWorker.q1.push(new Array());
        EcRsaOaepAsyncWorker.q2.push(new Array());
        var wkr;
        if ((window)["scriptPath"] != null) 
            EcRsaOaepAsyncWorker.w.push(wkr = new Worker((window)["scriptPath"] + "forgeAsync.js"));
         else 
            EcRsaOaepAsyncWorker.w.push(wkr = new Worker("forgeAsync.js"));
        wkr.onmessage = function(p1) {
            var o = p1.data;
            var success = EcRsaOaepAsyncWorker.q1[index].shift();
            var failure = EcRsaOaepAsyncWorker.q2[index].shift();
            if ((o)["error"] != null) {
                if (failure != null) 
                    failure((o)["error"]);
            } else if (success != null) {
                success((o)["result"]);
            }
        };
        wkr.onerror = function(p1) {
            var success = EcRsaOaepAsyncWorker.q1[index].shift();
            var failure = EcRsaOaepAsyncWorker.q2[index].shift();
            if (failure != null) {
                failure(p1.toString());
            }
        };
    };
    /**
     *  Asynchronous form of {{#crossLink
     *  "EcRsaOaep/encrypt:method"}}EcRsaOaep.encrypt{{/crossLink}}
     * 
     *  @param {EcPk}             pk Public Key to use to encrypt.
     *  @param {string}           plaintext Plaintext to encrypt.
     *  @param {function(string)} success Success method, result is Base64
     *                            encoded Ciphertext.
     *  @param {function(string)} failure Failure method, parameter is error
     *                            message.
     *  @method encrypt
     *  @static
     */
    static encrypt(pk, plaintext, success, failure) {
        EcRsaOaepAsyncWorker.initWorker();
        if (!EcRemote.async || EcRsaOaepAsyncWorker.w == null) {
            success(EcRsaOaep.encrypt(pk, plaintext));
        } else {
            var worker = EcRsaOaepAsyncWorker.rotator++;
            EcRsaOaepAsyncWorker.rotator = EcRsaOaepAsyncWorker.rotator % 8;
            var o = new Object();
            (o)["pk"] = pk.toPem();
            (o)["text"] = forge.util.encodeUtf8(plaintext);
            (o)["cmd"] = "encryptRsaOaep";
            EcRsaOaepAsyncWorker.q1[worker].push(success);
            EcRsaOaepAsyncWorker.q2[worker].push(failure);
            EcRsaOaepAsyncWorker.w[worker].postMessage(o);
        }
    };
    /**
     *  Asynchronous form of {{#crossLink
     *  "EcRsaOaep/decrypt:method"}}EcRsaOaep.decrypt{{/crossLink}}
     * 
     *  @param {EcPpk}            ppk Public private keypair to use to decrypt.
     *  @param {string}           ciphertext Ciphertext to decrypt.
     *  @param {function(string)} success Success method, result is unencoded
     *                            plaintext.
     *  @param {function(string)} failure Failure method, parameter is error
     *                            message.
     *  @method decrypt
     *  @static
     */
    static decrypt(ppk, ciphertext, success, failure) {
        if (EcCrypto.caching) {
            var cacheGet = null;
            cacheGet = (EcCrypto.decryptionCache)[ppk.toPem() + ciphertext];
            if (cacheGet != null) {
                success(cacheGet);
                return;
            }
        }
        EcRsaOaepAsyncWorker.initWorker();
        if (!EcRemote.async || EcRsaOaepAsyncWorker.w == null) {
            success(EcRsaOaep.decrypt(ppk, ciphertext));
        } else {
            var worker = EcRsaOaepAsyncWorker.rotator++;
            EcRsaOaepAsyncWorker.rotator = EcRsaOaepAsyncWorker.rotator % 8;
            var o = new Object();
            (o)["ppk"] = ppk.toPem();
            (o)["text"] = ciphertext;
            (o)["cmd"] = "decryptRsaOaep";
            if (EcCrypto.caching) {
                EcRsaOaepAsyncWorker.q1[worker].push(function(p1) {
                    (EcCrypto.decryptionCache)[ppk.toPem() + ciphertext] = forge.util.decodeUtf8(p1);
                    success(forge.util.decodeUtf8(p1));
                });
            } else {
                EcRsaOaepAsyncWorker.q1[worker].push(function(p1) {
                    success(forge.util.decodeUtf8(p1));
                });
            }
            EcRsaOaepAsyncWorker.q2[worker].push(failure);
            EcRsaOaepAsyncWorker.w[worker].postMessage(o);
        }
    };
    /**
     *  Asynchronous form of {{#crossLink
     *  "EcRsaOaep/sign:method"}}EcRsaOaep.sign{{/crossLink}}
     * 
     *  @param {EcPpk}            ppk Public private keypair to use to sign message.
     *  @param {string}           text Text to sign.
     *  @param {function(string)} success Success method, result is Base64
     *                            encoded signature.
     *  @param {function(string)} failure Failure method, parameter is error
     *                            message.
     *  @method sign
     *  @static
     */
    static sign(ppk, text, success, failure) {
        EcRsaOaepAsyncWorker.initWorker();
        if (!EcRemote.async || EcRsaOaepAsyncWorker.w == null) {
            success(EcRsaOaep.sign(ppk, text));
        } else {
            var worker = EcRsaOaepAsyncWorker.rotator++;
            EcRsaOaepAsyncWorker.rotator = EcRsaOaepAsyncWorker.rotator % 8;
            var o = new Object();
            (o)["ppk"] = ppk.toPem();
            (o)["text"] = forge.util.encodeUtf8(text);
            (o)["cmd"] = "signRsaOaep";
            EcRsaOaepAsyncWorker.q1[worker].push(success);
            EcRsaOaepAsyncWorker.q2[worker].push(failure);
            EcRsaOaepAsyncWorker.w[worker].postMessage(o);
        }
    };
    /**
     *  Asynchronous form of {{#crossLink
     *  "EcRsaOaep/signSha256:method"}}EcRsaOaep.signSha256{{/crossLink}}
     * 
     *  @param {EcPpk}            ppk Public private keypair to use to sign message.
     *  @param {string}           text Text to sign.
     *  @param {function(string)} success Success method, result is Base64
     *                            encoded signature.
     *  @param {function(string)} failure Failure method, parameter is error
     *                            message.
     *  @method signSha256
     *  @static
     */
    static signSha256 = function(ppk, text, success, failure) {
        EcRsaOaepAsyncWorker.initWorker();
        if (!EcRemote.async || EcRsaOaepAsyncWorker.w == null) {
            success(EcRsaOaep.signSha256(ppk, text));
        } else {
            var worker = EcRsaOaepAsyncWorker.rotator++;
            EcRsaOaepAsyncWorker.rotator = EcRsaOaepAsyncWorker.rotator % 8;
            var o = new Object();
            (o)["ppk"] = ppk.toPem();
            (o)["text"] = forge.util.encodeUtf8(text);
            (o)["cmd"] = "signSha256RsaOaep";
            EcRsaOaepAsyncWorker.q1[worker].push(success);
            EcRsaOaepAsyncWorker.q2[worker].push(failure);
            EcRsaOaepAsyncWorker.w[worker].postMessage(o);
        }
    };
    /**
     *  Asynchronous form of {{#crossLink
     *  "EcRsaOaep/verify:method"}}EcRsaOaep.verify{{/crossLink}}
     * 
     *  @param {EcPk}              pk Public key to use to verify message.
     *  @param {string}            text Text to use in verification.
     *  @param {string}            signature Signature to use in verification.
     *  @param {function(boolean)} success Success method, result is whether
     *                             signature is valid.
     *  @param {function(string)}  failure Failure method, parameter is error
     *                             message.
     *  @method verify
     *  @static
     */
    static verify(pk, text, signature, success, failure) {
        EcRsaOaepAsyncWorker.initWorker();
        if (!EcRemote.async || EcRsaOaepAsyncWorker.w == null) {
            success(EcRsaOaep.verify(pk, text, signature));
        } else {
            var worker = EcRsaOaepAsyncWorker.rotator++;
            EcRsaOaepAsyncWorker.rotator = EcRsaOaepAsyncWorker.rotator % 8;
            var o = new Object();
            (o)["pk"] = pk.toPem();
            (o)["text"] = forge.util.encodeUtf8(text);
            (o)["signature"] = signature;
            (o)["cmd"] = "verifyRsaOaep";
            EcRsaOaepAsyncWorker.q1[worker].push(success);
            EcRsaOaepAsyncWorker.q2[worker].push(failure);
            EcRsaOaepAsyncWorker.w[worker].postMessage(o);
        }
    };
};
