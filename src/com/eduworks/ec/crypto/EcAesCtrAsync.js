/**
 *  Async version of EcAesCtr that uses browser extensions (window.crypto) to accomplish cryptography much faster.
 *  Falls back to EcAesCtrAsyncWorker, if window.crypto is not available.
 *  @class EcAesCtrAsync
 */
module.exports = class EcAesCtrAsync{
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
    static encrypt(plaintext, secret, iv, success, failure) {
        if (crypto == null || crypto.subtle == null) {
            EcAesCtrAsyncWorker.encrypt(plaintext, secret, iv, success, failure);
            return;
        }
        if (EcRemote.async == false) {
            success(EcAesCtr.encrypt(plaintext, secret, iv));
            return;
        }
        var keyUsages = new Array();
        keyUsages.push("encrypt", "decrypt");
        var algorithm = new Object();
        algorithm.name = "AES-CTR";
        algorithm.counter = base64.decode(iv);
        algorithm.length = 128;
        var data;
        data = str2ab(plaintext);
        window.crypto.subtle.importKey("raw", base64.decode(secret), algorithm, false, keyUsages).then(function(key) {
            var p = window.crypto.subtle.encrypt(algorithm, key, data);
            p.then(function(p1) {
                success(base64.encode(p1));
            }, failure);
        }, failure);
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
    static decrypt(ciphertext, secret, iv, success, failure) {
        if (EcCrypto.caching) {
            var cacheGet = (EcCrypto.decryptionCache)[secret + iv + ciphertext];
            if (cacheGet != null) {
                success(cacheGet);
                return;
            }
        }
        if (crypto == null || crypto.subtle == null) {
            EcAesCtrAsyncWorker.decrypt(ciphertext, secret, iv, success, failure);
            return;
        }
        if (EcRemote.async == false) {
            success(EcAesCtr.decrypt(ciphertext, secret, iv));
        }
        var keyUsages = new Array();
        keyUsages.push("encrypt", "decrypt");
        var algorithm = new Object();
        algorithm.name = "AES-CTR";
        algorithm.counter = base64.decode(iv);
        algorithm.length = 128;
        var data;
        data = base64.decode(ciphertext);
        window.crypto.subtle.importKey("raw", base64.decode(secret), algorithm, false, keyUsages).then(function(key) {
            var p = window.crypto.subtle.decrypt(algorithm, key, data);
            p.then(function(p1) {
                (EcCrypto.decryptionCache)[secret + iv + ciphertext] = ab2str(p1);
                success(ab2str(p1));
            }, failure);
        }, failure);
    };
};
