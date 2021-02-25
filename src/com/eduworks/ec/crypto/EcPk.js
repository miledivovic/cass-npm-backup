/**
 *  Helper classes for dealing with RSA Public Keys.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class EcPk
 *  @module com.eduworks.ec
 */
var EcPk = function() {};
EcPk = stjs.extend(EcPk, null, [], function(constructor, prototype) {
    constructor.cache = null;
    prototype.pk = null;
    prototype.defaultPem = null;
    prototype.jwk = null;
    prototype.key = null;
    prototype.signKey = null;
    /**
     *  Decodes a PEM encoded SubjectPublicKeyInfo (PKCS#8) or RSAPublicKey (PKCS#1) formatted RSA Public Key.
     *  (In case you were curious.)
     * 
     *  @param {string} pem PEM as a string.
     *  @return {EcPk} Object used to perform public key operations.
     *  @method fromPem
     *  @static
     */
    constructor.fromPem = function(pem) {
        var pk = (EcPk.cache)[pem];
        if (pk != null) 
            return pk;
        pk = new EcPk();
        try {
            pk.pk = forge.pki.publicKeyFromPem(pem);
        }catch (ex) {
            return null;
        }
        (EcPk.cache)[pem] = pk;
        return pk;
    };
    /**
     *  Compares two public keys, and returns true if their PEM forms match.
     * 
     *  @param {EcPk} obj Object to compare to.
     *  @return {boolean} True if the keys match.
     *  @method equals
     */
    prototype.equals = function(obj) {
        if (stjs.isInstanceOf(obj.constructor, EcPk)) 
            return this.toPem().equals((obj).toPem());
        return Object.prototype.equals.call(this, obj);
    };
    /**
     *  Encodes the public key into a PEM encoded SubjectPublicKeyInfo (PKCS#8) formatted RSA Public Key.
     *  (In case you were curious.)
     * 
     *  @return {string} PEM encoded public key without whitespace.
     *  @method toPem
     */
    prototype.toPem = function() {
        if (this.defaultPem == null) 
            this.defaultPem = forge.pki.publicKeyToPem(this.pk).replaceAll("\r", "").replaceAll("\n", "");
        return this.defaultPem;
    };
    /**
     *  Encodes the public key into a PEM encoded RSAPublicKey (PKCS#1) formatted RSA Public Key.
     *  (In case you were curious.)
     * 
     *  @return {string} PEM encoded public key without whitespace.
     *  @method toPkcs1Pem
     */
    prototype.toPkcs1Pem = function() {
        return forge.pki.publicKeyToRSAPublicKeyPem(this.pk).replaceAll("\r", "").replaceAll("\n", "");
    };
    /**
     *  Encodes the public key into a PEM encoded SubjectPublicKeyInfo (PKCS#8) formatted RSA Public Key.
     *  (In case you were curious.)
     * 
     *  @return {string} PEM encoded public key without whitespace.
     *  @method toPkcs8Pem
     */
    prototype.toPkcs8Pem = function() {
        return forge.pki.publicKeyToPem(this.pk).replaceAll("\r", "").replaceAll("\n", "");
    };
    prototype.toJwk = function() {
        if (this.jwk == null) 
            this.jwk = pemJwk.pem2jwk(forge.pki.publicKeyToPem(this.pk));
        return this.jwk;
    };
    /**
     *  Hashes the public key into an SSH compatible fingerprint.
     * 
     *  @return {string} Public key fingerprint.
     *  @method fingerprint
     */
    prototype.fingerprint = function() {
        var o = new Object();
        (o)["encoding"] = "hex";
        return forge.ssh.getPublicKeyFingerprint(this.pk, o);
    };
    prototype.verify = function(bytes, decode64) {
        return this.pk.verify(bytes, decode64);
    };
}, {cache: "Object", pk: "forge.pk", jwk: "Object", key: "CryptoKey", signKey: "CryptoKey"}, {});
(function() {
    if (EcPk.cache == null) 
        EcPk.cache = new Object();
})();
