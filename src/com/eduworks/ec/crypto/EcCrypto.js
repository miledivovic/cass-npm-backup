/**
 *  @author Fritz
 *  @class EcCrypto
 */
module.exports = class EcCrypto {
    /**
     *  Turn on (defualt off) caching of decrypted data.
     *  @property caching
     *  @type boolean
     */
    static caching = false;
    static testMode = false;
    static deprecationNotice = false;
    static decryptionCache = {};
    /**
     *  Calculate MD5 hash of a string.
     *  @param {String} s String to MD5
     *  @return {String} MD5 hash
     *  @static
     *  @method md5
     */
    static md5 = function(s) {
        var m = forge.md.md5.create();
        m.update(s);
        return m.digest().toHex();
    };
    /**
     *  Calculate SHA-256 hash of a string.
     *  @param {String} s String to SHA-256
     *  @return {String} SHA-256 hash
     *  @static
     *  @method sha256
     */
    static sha256 = function(s) {
        var m = forge.md.sha256.create();
        m.update(s, "utf8");
        return m.digest().toHex();
    };
    
    static ab2str(buf) {
        return new TextDecoder("utf-8").decode(buf);
    }
    
    static str2ab(str) {
        return new TextEncoder("utf-8").encode(str).buffer;
    }
    
}
