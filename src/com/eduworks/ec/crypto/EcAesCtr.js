/**
 *  Encrypts data synchronously using AES-256-CTR. Requires secret and iv to be 32 bytes.
 *  Output is encoded in base64 for easier handling.
 * 
 *  @author fritz.ray@eduworks.com
 *  @module com.eduworks.ec
 *  @class EcAesCtr
 */
module.exports = class EcAesCtr{
    /**
     *  Encrypts plaintext using AES-256-CTR.
     *  Plaintext is treated as as a sequence of bytes, does not perform UTF8 decoding.
     *  Returns base64 encoded ciphertext.
     * 
     *  @param {string} plaintext Text to encrypt.
     *  @param {string} secret Secret to use to encrypt.
     *  @param {string} iv Initialization Vector to use to encrypt.
     *  @return {string} Ciphertext encoded using base64.
     *  @method encrypt
     *  @static
     *  @deprecated For backup use only. Instead, use await on EcAesCtrAsync.
     */
    static encrypt(plaintext, secret, iv) {
        if (EcCrypto.deprecationNotice == false)
            console.trace("This method is deprecated. Please use await on EcAesCtrAsync.");
        EcCrypto.deprecationNotice = true;
        if ((typeof httpStatus) != "undefined" && forge.util.decode64(secret).length == 16 && forge.util.decode64(iv).length == 16) 
            return aesEncrypt(plaintext, iv, secret);
        var c = forge.cipher.createCipher("AES-CTR", forge.util.decode64(secret));
        c.start(new EcAesParameters(iv));
        c.update(forge.util.createBuffer(forge.util.encodeUtf8(plaintext)));
        c.finish();
        var encrypted = c.output;
        return forge.util.encode64(encrypted.bytes());
    };
    /**
     *  Decrypts ciphertext using AES-256-CTR.
     *  Ciphertext must be base64 encoded ciphertext.
     *  Returns plaintext as a string (Sequence of bytes, no encoding).
     * 
     *  @param {string} ciphertext Ciphertext to decrypt.
     *  @param {string} secret Secret to use to decrypt.
     *  @param {string} iv Initialization Vector to use to decrypt.
     *  @return {string} Plaintext with no encoding.
     *  @method decrypt
     *  @static
     *  @deprecated For backup use only. Instead, use await on EcAesCtrAsync.
     */
    static decrypt(ciphertext, secret, iv) {
        if (EcCrypto.deprecationNotice == false)
            console.trace("This method is deprecated. Please use await on EcAesCtrAsync.");
        EcCrypto.deprecationNotice = true;
        if (EcCrypto.caching) {
            var cacheGet = (EcCrypto.decryptionCache)[secret + iv + ciphertext];
            if (cacheGet != null) 
                return cacheGet;
        }
        if ((typeof httpStatus) != "undefined" && forge.util.decode64(secret).length == 16 && forge.util.decode64(iv).length == 16) {
            var result = aesDecrypt(ciphertext, iv, secret);
            if (EcCrypto.caching) 
                (EcCrypto.decryptionCache)[secret + iv + ciphertext] = result;
            return result;
        }
        var c = forge.cipher.createDecipher("AES-CTR", forge.util.decode64(secret));
        c.start(new EcAesParameters(iv));
        c.update(forge.util.createBuffer(forge.util.decode64(ciphertext)));
        c.finish();
        var decrypted = c.output;
        if (EcCrypto.caching) 
            (EcCrypto.decryptionCache)[secret + iv + ciphertext] = forge.util.decodeUtf8(decrypted.data);
        return forge.util.decodeUtf8(decrypted.data);
    };
};
