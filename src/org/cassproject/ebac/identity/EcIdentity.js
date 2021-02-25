/**
 *  An identity is an alias that a person or system may own. It consists of a
 *  private key and a display name. Using the private key we may: 1. Perform all
 *  operations of a EcContact. 2. Decrypt messages using our private key. 3. Sign
 *  messages, ensuring the recipient knows that we sent the message and it was
 *  not altered.
 * 
 *  @author fritz.ray@eduworks.com
 *  @module com.eduworks.ec
 *  @class EcIdentity
 *  @constructor
 */
var EcIdentity = function() {
    this.displayName = "Alias " + EcIdentity.identityCounter++;
};
EcIdentity = stjs.extend(EcIdentity, null, [], function(constructor, prototype) {
    constructor.identityCounter = 1;
    /**
     *  Private Key of this identity
     * 
     *  @property ppk
     *  @type EcPpk
     */
    prototype.ppk = null;
    /**
     *  Display name of this identity
     * 
     *  @property displayName
     *  @type String
     */
    prototype.displayName = null;
    /**
     *  String identifying where this identity came from
     * 
     *  @property displayName
     *  @type String
     */
    prototype.source = null;
    /**
     *  Helper function to decrypt a credential (storable version of an identity)
     *  into an identity)
     * 
     *  @param {EbacCredential} credential
     *                          Credential to decrypt.
     *  @param {String}         secret
     *                          AES secret used to decrypt the credential.
     *  @param {String}         source
     *                          Source of the credential, used to track where a credential
     *                          came from.
     *  @return {EcIdentity}
     *  Decrypted identity object, ready for use.
     *  @memberOf EcIdentity
     *  @method fromCredential
     *  @static
     */
    constructor.fromCredential = function(credential, secret, source) {
        var i = new EcIdentity();
        i.ppk = EcPpk.fromPem(EcAesCtr.decrypt(credential.ppk, secret, credential.iv));
        i.source = source;
        if (credential.displayName != null && credential.displayNameIv != null) 
            i.displayName = EcAesCtr.decrypt(credential.displayName, secret, credential.iv);
        return i;
    };
    prototype.equals = function(obj) {
        if (stjs.isInstanceOf(obj.constructor, EcIdentity)) {
            if (this.ppk == null) 
                return false;
            if ((obj).ppk == null) 
                return false;
            return this.ppk.toPem().equals((obj).ppk.toPem());
        }
        return Object.prototype.equals.call(this, obj);
    };
    /**
     *  Helper function to encrypt an identity into a credential (storable
     *  version of an identity)
     * 
     *  @param {String} secret
     *                  AES secret used to encrypt the credential.
     *  @return {EbacCredential}
     *  Encrypted credential object.
     *  @memberOf EcIdentity
     *  @method toCredential
     */
    prototype.toCredential = function(secret) {
        var c = new EbacCredential();
        c.iv = EcAes.newIv(16);
        c.ppk = EcAesCtr.encrypt(this.ppk.toPem(), secret, c.iv);
        c.displayNameIv = EcAes.newIv(16);
        c.displayName = EcAesCtr.encrypt(this.displayName, secret, c.iv);
        return c;
    };
    /**
     *  Converts an identity to a contact.
     * 
     *  @return {EcContact}
     *  Contact object.
     *  @memberOf EcIdentity
     *  @method toContact
     */
    prototype.toContact = function() {
        var c = new EcContact();
        c.displayName = this.displayName;
        c.pk = this.ppk.toPk();
        c.source = this.source;
        return c;
    };
}, {ppk: "EcPpk"}, {});
