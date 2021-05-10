const EcPk = require("../../../../com/eduworks/ec/crypto/EcPk");

/**
 *  A contact is an identity that we do not own. Using the public key we may: 1.
 *  Send them information (by encrypting data with their public key) 2. Verify a
 *  signed message that was sent (by using the verify function of the public key)
 *  3. Distinguish between this identity and other identities through the
 *  displayName.
 *
 *  @author fritz.ray@eduworks.com
 *  @module com.eduworks.ec
 *  @class EcContact
 *  @constructor
 */
module.exports = class EcContact {
	/**
	 *  Public Key of the contact
	 *
	 *  @property pk
	 *  @type EcPk
	 */
	pk = null;
	/**
	 *  Display Name of the contact
	 *
	 *  @property displayName
	 *  @type String
	 */
	displayName = null;
	/**
	 *  URL to the home server of the contact
	 *
	 *  @property source
	 *  @type String
	 */
	source = null;
	/**
	 *  Helper function to decrypt an encrypted contact (storable version of an contact)
	 *  into an contact
	 *
	 *  @param {EbacContact} contact
	 *                       Contact to decrypt.
	 *  @param {String}      secret
	 *                       AES secret used to decrypt the credential.
	 *  @param {String}      source
	 *                       Source of the credential, used to track where a contact
	 *                       came from.
	 *  @return {EcContact}
	 *  Decrypted identity object, ready for use.
	 *  @memberOf EcContact
	 *  @method fromEncryptedContact
	 *  @static
	 */
	static fromEncryptedContact(contact, secret, source) {
		var i = new EcContact();
		i.pk = EcPk.fromPem(EcAesCtr.decrypt(contact.pk, secret, contact.iv));
		i.source = source;
		if (contact.displayName != null && contact.displayNameIv != null)
			i.displayName = EcAesCtr.decrypt(
				contact.displayName,
				secret,
				contact.iv
			);
		return i;
	}
	/**
	 *  Comparison method that checks if the key is the same as another EcContact
	 *
	 *  @param {Object} obj
	 *                  Contact to compare if same key
	 *  @return {boolean}
	 *  true if the key is the same, false if not
	 *  @memberOf EcContact
	 *  @method equals
	 */
	equals(obj) {
		if (obj instanceof EcContact) {
			if (this.pk == null) return false;
			if (obj.pk == null) return false;
			return this.pk.toPem().equals(obj.pk.toPem());
		}
		return Object.equals.call(this, obj);
	}
	/**
	 *  Returns the URL to generic image that should be displayed for the contact
	 *
	 *  @return {String}
	 *  URL of generic image file
	 *  @memberOf EcContact
	 *  @method getImageUrl
	 */
	getImageUrl() {
		return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/48px-User_icon_2.svg.png";
	}
	/**
	 *  Helper function to encrypt a contact into an encrypted contact (storable
	 *  version of a contact)
	 *
	 *  @param {String} secret
	 *                  AES secret used to encrypt the contact.
	 *  @return {EbacContact}
	 *  Encrypted contact object.
	 *  @memberOf EcContact
	 *  @method toEncryptedContact
	 */
	toEncryptedContact(secret) {
		var c = new EbacContact();
		c.iv = EcAes.newIv(16);
		c.pk = EcAesCtr.encrypt(this.pk.toPem(), secret, c.iv);
		c.displayNameIv = EcAes.newIv(16);
		c.displayName = EcAesCtr.encrypt(this.displayName, secret, c.iv);
		c.sourceIv = EcAes.newIv(16);
		c.source = EcAesCtr.encrypt(this.source, secret, c.iv);
		return c;
	}
};
