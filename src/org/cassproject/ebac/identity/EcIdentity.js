const EcAes = require("../../../../com/eduworks/ec/crypto/EcAes");
const EcAesCtrAsync = require("../../../../com/eduworks/ec/crypto/EcAesCtrAsync");
const EcPpk = require("../../../../com/eduworks/ec/crypto/EcPpk");
const EbacCredential = require("../../../../com/eduworks/schema/ebac/EbacCredential");
const EcContact = require("./EcContact");

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
module.exports = class EcIdentity {
	constructor() {
		this.displayName = "Alias " + EcIdentity.identityCounter++;
	}
	static identityCounter = 1;
	/**
	 *  Private Key of this identity
	 *
	 *  @property ppk
	 *  @type EcPpk
	 */
	ppk = null;
	/**
	 *  Display name of this identity
	 *
	 *  @property displayName
	 *  @type String
	 */
	displayName = null;
	/**
	 *  String identifying where this identity came from
	 *
	 *  @property displayName
	 *  @type String
	 */
	source = null;
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
	static async fromCredential(credential, secret, source) {
		var i = new EcIdentity();
		i.ppk = EcPpk.fromPem(
			await EcAesCtrAsync.decrypt(credential.ppk, secret, credential.iv)
		);
		i.source = source;
		if (credential.displayName != null && credential.displayNameIv != null)
			i.displayName = await EcAesCtrAsync.decrypt(
				credential.displayName,
				secret,
				credential.iv
			);
		return i;
	}
	equals(obj) {
		if (obj instanceof EcIdentity) {
			if (this.ppk == null) return false;
			if (obj.ppk == null) return false;
			return this.ppk.toPem().equals(obj.ppk.toPem());
		}
		return Object.equals.call(this, obj);
	}
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
	async toCredential(secret) {
		var c = new EbacCredential();
		c.iv = EcAes.newIv(16);
		c.ppk = await EcAesCtrAsync.encrypt(this.ppk.toPem(), secret, c.iv);
		c.displayNameIv = EcAes.newIv(16);
		c.displayName = await EcAesCtrAsync.encrypt(
			this.displayName,
			secret,
			c.iv
		);
		return c;
	}
	/**
	 *  Converts an identity to a contact.
	 *
	 *  @return {EcContact}
	 *  Contact object.
	 *  @memberOf EcIdentity
	 *  @method toContact
	 */
	toContact() {
		var c = new EcContact();
		c.displayName = this.displayName;
		c.pk = this.ppk.toPk();
		c.source = this.source;
		return c;
	}
};
