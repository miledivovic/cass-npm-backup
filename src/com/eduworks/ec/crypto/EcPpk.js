var pemJwk = require('pem-jwk');
/**
 *  Helper classes for dealing with RSA Private Keys.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class EcPpk
 *  @module com.eduworks.ec
 */
module.exports = class EcPpk{
    static cache = {};
    defaultPem = null;
    jwk = null;
    key = null;
    signKey = null;
    ppk = null;
    defaultPk = null;
    /**
     *  Decodes a PEM encoded PrivateKeyInfo (PKCS#8) or RSAPrivateKey (PKCS#1) formatted RSA Public Key.
     *  (In case you were curious.)
     * 
     *  @param {string} pem PEM as a string.
     *  @return {EcPk} Object used to perform public key operations.
     *  @method fromPem
     *  @static
     */
    static fromPem(pem) {
        var pk = (EcPpk.cache)[pem];
        if (pk != null) 
            return pk;
        pk = new EcPpk();
        try {
            pk.ppk = forge.pki.privateKeyFromPem(pem);
        }catch (ex) {
            return null;
        }
        (EcPpk.cache)[pem] = pk;
        return pk;
    };
    /**
     *  Generates an RSA Keypair using web workers.
     * 
     *  @param {function(EcPpk)} callback Method called when the keypair is generated.
     *  @method generateKeyAsync
     *  @static
     */
    static generateKeyAsync(callback) {
        var o = {};
        (o)["workers"] = -1;
        forge.pki.rsa.generateKeyPair(o, function(err, keypair) {
            var ppk = new EcPpk();
            ppk.ppk = keypair.privateKey;
            callback(ppk);
        });
    };
    /**
     *  Generates an RSA Keypair synchronously. Can take a while.
     * 
     *  @return {EcPpk} Public private keypair.
     *  @method generateKey
     *  @static
     */
    static generateKey() {
        var o = {};
        (o)["workers"] = -1;
        var keypair = forge.pki.rsa.generateKeyPair(o, null);
        var ppk = new EcPpk();
        ppk.ppk = keypair.privateKey;
        return ppk;
    };
    /**
     *  Returns true iff the PEM forms of the public private keypair match.
     *  Can also match against a public key if the public portion of the keypair match.
     * 
     *  @param {EcPpk|EcPk} Key to compare to.
     *  @return boolean If they match.
     *  @method equals
     */
    equals(obj) {
        if (stjs.isInstanceOf(obj.constructor, EcPpk)) 
            return this.toPem().equals((obj).toPem());
        if (stjs.isInstanceOf(obj.constructor, EcPk)) 
            return this.toPk().toPem().equals((obj).toPem());
        return Object.equals.call(this, obj);
    };
    /**
     *  Encodes the private key into a PEM encoded RSAPrivateKey (PKCS#1) formatted RSA Public Key.
     *  (In case you were curious.)
     * 
     *  @return {string} PEM encoded public key without whitespace.
     *  @method toPem
     */
    toPem() {
        if (this.defaultPem == null) 
            this.defaultPem = forge.pki.privateKeyToPem(this.ppk).replaceAll("\r", "").replaceAll("\n", "");
        return this.defaultPem;
    };
    /**
     *  Encodes the private key into a PEM encoded RSAPrivateKey (PKCS#1) formatted RSA Public Key.
     *  (In case you were curious.)
     * 
     *  @return {string} PEM encoded public key without whitespace.
     *  @method toPkcs1Pem
     */
    toPkcs1Pem = function() {
        return forge.pki.privateKeyToPem(this.ppk).replaceAll("\r", "").replaceAll("\n", "");
    };
    /**
     *  Encodes the private key into a PEM encoded PrivateKeyInfo (PKCS#8) formatted RSA Public Key.
     *  (In case you were curious.)
     * 
     *  @return {string} PEM encoded public key without whitespace.
     *  @method toPkcs8Pem
     */
    toPkcs8Pem = function() {
        return forge.pki.privateKeyInfoToPem(forge.pki.wrapRsaPrivateKey(forge.pki.privateKeyToAsn1(this.ppk))).replaceAll("\r", "").replaceAll("\n", "");
    };
    toJwk() {
        if (this.jwk == null) 
            this.jwk = pemJwk.pem2jwk(forge.pki.privateKeyToPem(this.ppk));
        return this.jwk;
    };
    toPkcs8 = function() {
        return forge.pki.wrapRsaPrivateKey(forge.pki.privateKeyToAsn1(this.ppk));
    };
    /**
     *  Extracts the public key portion from the public private keypair.
     * 
     *  @return {EcPk} Public Key Helper.
     *  @method toPk
     */
    toPk() {
        if (this.defaultPk != null) 
            return this.defaultPk;
        var pk = this.defaultPk = new EcPk();
        pk.pk = forge.pki.rsa.setPublicKey(this.ppk.n, this.ppk.e);
        return pk;
    };
    /**
     *  Returns true if this PPK is in an array of PPKs.
     * 
     *  @param {Array<EcPpk>} ppks Array of ppks
     *  @return true iff this PPK in ppks.
     *  @method inArray
     */
    inArray(ppks) {
        for (var i = 0; i < ppks.length; i++) {
            if (ppks[i].equals(this)) 
                return true;
        }
        return false;
    };
}
