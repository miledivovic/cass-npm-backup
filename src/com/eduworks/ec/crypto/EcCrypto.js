/**
 *  @author Fritz
 *  @class EcCrypto
 */
var EcCrypto = function() {};
EcCrypto = stjs.extend(EcCrypto, null, [], function(constructor, prototype) {
    /**
     *  Turn on (defualt off) caching of decrypted data.
     *  @property caching
     *  @type boolean
     */
    constructor.caching = false;
    constructor.decryptionCache = new Object();
    /**
     *  Calculate MD5 hash of a string.
     *  @param {String} s String to MD5
     *  @return {String} MD5 hash
     *  @static
     *  @method md5
     */
    constructor.md5 = function(s) {
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
    constructor.sha256 = function(s) {
        var m = forge.md.sha256.create();
        m.update(s, "utf8");
        return m.digest().toHex();
    };
}, {decryptionCache: "Object"}, {});
