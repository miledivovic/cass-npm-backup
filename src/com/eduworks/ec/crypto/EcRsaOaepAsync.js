/**
 *  Async version of EcRsaOaep that uses browser extensions (window.crypto) to accomplish cryptography much faster.
 *  Falls back to EcRsaOaepAsyncWorker, if window.crypto is not available.
 *  @class EcRsaOaepAsync
 */
var EcRsaOaepAsync = function() {};
EcRsaOaepAsync = stjs.extend(EcRsaOaepAsync, null, [], function(constructor, prototype) {
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
    constructor.encrypt = function(pk, plainText, success, failure) {
        if (EcRemote.async == false) {
            success(EcRsaOaep.encrypt(pk, plainText));
            return;
        }
        if (EcBrowserDetection.isIeOrEdge() || window == null || window.crypto == null || window.crypto.subtle == null) {
            EcRsaOaepAsyncWorker.encrypt(pk, plainText, success, failure);
            return;
        }
        var keyUsages = new Array();
        keyUsages.push("encrypt");
        var algorithm = new Object();
        algorithm.name = "RSA-OAEP";
        algorithm.hash = "SHA-1";
        if (pk.key == null) 
            window.crypto.subtle.importKey("jwk", pk.toJwk(), algorithm, false, keyUsages).then(function(key) {
                pk.key = key;
                window.crypto.subtle.encrypt(algorithm, key, str2ab(forge.util.encodeUtf8(plainText))).then(function(p1) {
                    success(base64.encode(p1));
                }, failure);
            }, failure);
         else 
            window.crypto.subtle.encrypt(algorithm, pk.key, str2ab(forge.util.encodeUtf8(plainText))).then(function(p1) {
                success(base64.encode(p1));
            }, failure);
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
    constructor.decrypt = function(ppk, cipherText, success, failure) {
        if (EcCrypto.caching) {
            var cacheGet = null;
            cacheGet = (EcCrypto.decryptionCache)[ppk.toPem() + cipherText];
            if (cacheGet != null) {
                success(cacheGet);
                return;
            }
        }
        if (EcRemote.async == false) {
            success(EcRsaOaep.decrypt(ppk, cipherText));
            return;
        }
        if (EcBrowserDetection.isIeOrEdge() || window == null || window.crypto == null || window.crypto.subtle == null) {
            EcRsaOaepAsyncWorker.decrypt(ppk, cipherText, success, failure);
            return;
        }
        var keyUsages = new Array();
        keyUsages.push("decrypt");
        var algorithm = new Object();
        algorithm.name = "RSA-OAEP";
        algorithm.hash = "SHA-1";
        if (ppk.key == null) 
            window.crypto.subtle.importKey("jwk", ppk.toJwk(), algorithm, false, keyUsages).then(function(key) {
                ppk.key = key;
                window.crypto.subtle.decrypt(algorithm, key, base64.decode(cipherText)).then(function(p1) {
                    var result = forge.util.decodeUtf8(ab2str(p1));
                    if (EcCrypto.caching) {
                        (EcCrypto.decryptionCache)[ppk.toPem() + cipherText] = result;
                    }
                    success(result);
                }, failure);
            }, failure);
         else 
            window.crypto.subtle.decrypt(algorithm, ppk.key, base64.decode(cipherText)).then(function(p1) {
                var result = forge.util.decodeUtf8(ab2str(p1));
                if (EcCrypto.caching) {
                    (EcCrypto.decryptionCache)[ppk.toPem() + cipherText] = result;
                }
                success(result);
            }, failure);
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
    constructor.sign = function(ppk, text, success, failure) {
        if (EcRemote.async == false) {
            success(EcRsaOaep.sign(ppk, text));
            return;
        }
        if (EcBrowserDetection.isIeOrEdge() || window == null || window.crypto == null || window.crypto.subtle == null) {
            EcRsaOaepAsyncWorker.sign(ppk, text, success, failure);
            return;
        }
        if (text == null)
        {
            success(null);
            return;
        }
        var keyUsages = new Array();
        keyUsages.push("sign");
        var algorithm = new Object();
        algorithm.name = "RSASSA-PKCS1-v1_5";
        algorithm.hash = "SHA-1";
        if (ppk.signKey == null) 
            window.crypto.subtle.importKey("jwk", ppk.toJwk(), algorithm, false, keyUsages).then(function(key) {
                ppk.signKey = key;
                window.crypto.subtle.sign(algorithm, key, str2ab(forge.util.encodeUtf8(text))).then(function(p1) {
                    success(base64.encode(p1));
                }, failure);
            }, failure);
         else 
            window.crypto.subtle.sign(algorithm, ppk.signKey, str2ab(forge.util.encodeUtf8(text))).then(function(p1) {
                success(base64.encode(p1));
            }, failure);
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
    constructor.signSha256 = function(ppk, text, success, failure) {
        if (EcRemote.async == false) {
            success(EcRsaOaep.signSha256(ppk, text));
            return;
        }
        if (EcBrowserDetection.isIeOrEdge() || window == null || window.crypto == null || window.crypto.subtle == null) {
            EcRsaOaepAsyncWorker.sign(ppk, text, success, failure);
            return;
        }
        var keyUsages = new Array();
        keyUsages.push("sign");
        var algorithm = new Object();
        algorithm.name = "RSASSA-PKCS1-v1_5";
        algorithm.hash = "SHA-256";
        if (ppk.signKey == null) 
            window.crypto.subtle.importKey("jwk", ppk.toJwk(), algorithm, false, keyUsages).then(function(key) {
                ppk.signKey = key;
                window.crypto.subtle.sign(algorithm, key, str2ab(forge.util.encodeUtf8(text))).then(function(p1) {
                    success(base64.encode(p1));
                }, failure);
            }, failure);
         else 
            window.crypto.subtle.sign(algorithm, ppk.signKey, str2ab(forge.util.encodeUtf8(text))).then(function(p1) {
                success(base64.encode(p1));
            }, failure);
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
    constructor.verify = function(pk, text, signature, success, failure) {
        if (EcRemote.async == false) {
            success(EcRsaOaep.verify(pk, text, signature));
            return;
        }
        if (EcBrowserDetection.isIeOrEdge() || window == null || window.crypto == null || window.crypto.subtle == null) {
            EcRsaOaepAsyncWorker.verify(pk, text, signature, success, failure);
            return;
        }
        var keyUsages = new Array();
        keyUsages.push("verify");
        var algorithm = new Object();
        algorithm.name = "RSASSA-PKCS1-v1_5";
        algorithm.hash = "SHA-1";
        if (pk.signKey == null) 
            window.crypto.subtle.importKey("jwk", pk.toJwk(), algorithm, false, keyUsages).then(function(key) {
                pk.signKey = key;
                window.crypto.subtle.verify(algorithm, key, base64.decode(signature), str2ab(forge.util.encodeUtf8(text))).then(function(p1) {
                    success(p1);
                }, failure);
            }, failure);
         else 
            window.crypto.subtle.verify(algorithm, pk.signKey, base64.decode(signature), str2ab(forge.util.encodeUtf8(text))).then(function(p1) {
                success(p1);
            }, failure);
    };
}, {}, {});
