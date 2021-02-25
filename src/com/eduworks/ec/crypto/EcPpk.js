/**
 *  Helper classes for dealing with RSA Private Keys.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class EcPpk
 *  @module com.eduworks.ec
 */
var EcPpk = function() {};
EcPpk = stjs.extend(EcPpk, null, [], function(constructor, prototype) {
    constructor.cache = null;
    prototype.defaultPem = null;
    prototype.jwk = null;
    prototype.key = null;
    prototype.signKey = null;
    prototype.ppk = null;
    prototype.defaultPk = null;
    /**
     *  Decodes a PEM encoded PrivateKeyInfo (PKCS#8) or RSAPrivateKey (PKCS#1) formatted RSA Public Key.
     *  (In case you were curious.)
     * 
     *  @param {string} pem PEM as a string.
     *  @return {EcPk} Object used to perform public key operations.
     *  @method fromPem
     *  @static
     */
    constructor.fromPem = function(pem) {
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
    constructor.generateKeyAsync = function(callback) {
        var o = new Object();
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
    constructor.generateKey = function() {
        var o = new Object();
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
    prototype.equals = function(obj) {
        if (stjs.isInstanceOf(obj.constructor, EcPpk)) 
            return this.toPem().equals((obj).toPem());
        if (stjs.isInstanceOf(obj.constructor, EcPk)) 
            return this.toPk().toPem().equals((obj).toPem());
        return Object.prototype.equals.call(this, obj);
    };
    /**
     *  Encodes the private key into a PEM encoded RSAPrivateKey (PKCS#1) formatted RSA Public Key.
     *  (In case you were curious.)
     * 
     *  @return {string} PEM encoded public key without whitespace.
     *  @method toPem
     */
    prototype.toPem = function() {
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
    prototype.toPkcs1Pem = function() {
        return forge.pki.privateKeyToPem(this.ppk).replaceAll("\r", "").replaceAll("\n", "");
    };
    /**
     *  Encodes the private key into a PEM encoded PrivateKeyInfo (PKCS#8) formatted RSA Public Key.
     *  (In case you were curious.)
     * 
     *  @return {string} PEM encoded public key without whitespace.
     *  @method toPkcs8Pem
     */
    prototype.toPkcs8Pem = function() {
        return forge.pki.privateKeyInfoToPem(forge.pki.wrapRsaPrivateKey(forge.pki.privateKeyToAsn1(this.ppk))).replaceAll("\r", "").replaceAll("\n", "");
    };
    prototype.toJwk = function() {
        if (this.jwk == null) 
            this.jwk = pemJwk.pem2jwk(forge.pki.privateKeyToPem(this.ppk));
        return this.jwk;
    };
    prototype.toPkcs8 = function() {
        return forge.pki.wrapRsaPrivateKey(forge.pki.privateKeyToAsn1(this.ppk));
    };
    /**
     *  Extracts the public key portion from the public private keypair.
     * 
     *  @return {EcPk} Public Key Helper.
     *  @method toPk
     */
    prototype.toPk = function() {
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
    prototype.inArray = function(ppks) {
        for (var i = 0; i < ppks.length; i++) {
            if (ppks[i].equals(this)) 
                return true;
        }
        return false;
    };
}, {cache: "Object", jwk: "Object", key: "CryptoKey", signKey: "CryptoKey", ppk: "forge.ppk", defaultPk: "EcPk"}, {});
(function() {
    if (EcPpk.cache == null) 
        EcPpk.cache = new Object();
})();
