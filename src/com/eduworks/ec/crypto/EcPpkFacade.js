var pemJwk = require("pem-jwk");
let forge = require("node-forge");
let EcPk = require("./EcPk.js");
let EcPpk = require("./EcPpk.js");
/**
 *  Helper classes for dealing with RSA Private Keys.
 *
 *  @author fritz.ray@eduworks.com
 *  @class EcPpk
 *  @module com.eduworks.ec
 */
module.exports = class EcPpkFacade extends EcPpk {
	pk = null;

	constructor(pk) {
		super();
		if (pk != null)
			this.pk = pk;
	}

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
		var pk = EcPk.cache[pem];
		if (pk != null)
			return new EcPpkFacade(pk);
		return new EcPpkFacade(EcPk.fromPem(pem));
	}
	/**
	 *  Returns true iff the PEM forms of the public private keypair match.
	 *  Can also match against a public key if the public portion of the keypair match.
	 *
	 *  @param {EcPpk|EcPk} Key to compare to.
	 *  @return boolean If they match.
	 *  @method equals
	 */
	equals(obj) {
		if (obj instanceof EcPpk)
			return this.toPem() == obj.toPk().toPem();
		if (obj instanceof EcPk)
			return this.toPem() == obj.toPem();
		return Object.equals.call(this, obj);
	}
	/**
	 *  Encodes the private key into a PEM encoded RSAPrivateKey (PKCS#1) formatted RSA Public Key.
	 *  (In case you were curious.)
	 *
	 *  @return {string} PEM encoded public key without whitespace.
	 *  @method toPem
	 */
	toPem() {
		return this.pk.toPem();
	}
	/**
	 *  Encodes the private key into a PEM encoded RSAPrivateKey (PKCS#1) formatted RSA Public Key.
	 *  (In case you were curious.)
	 *
	 *  @return {string} PEM encoded public key without whitespace.
	 *  @method toPkcs1Pem
	 */
	toPkcs1Pem = function() {
		return this.pk.toPkcs1Pem();
	};
	/**
	 *  Encodes the private key into a PEM encoded PrivateKeyInfo (PKCS#8) formatted RSA Public Key.
	 *  (In case you were curious.)
	 *
	 *  @return {string} PEM encoded public key without whitespace.
	 *  @method toPkcs8Pem
	 */
	toPkcs8Pem = function() {
		return this.pk.toPkcs8Pem();
	};
	toJwk() {
		return this.pk.toJwk();
	}
	toPkcs8 = function() {
		return this.pk.toPkcs8();
	};
	/**
	 *  Extracts the public key portion from the public private keypair.
	 *
	 *  @return {EcPk} Public Key Helper.
	 *  @method toPk
	 */
	toPk() {
		return this.pk;
	}
	/**
	 *  Returns true if this PPK is in an array of PPKs.
	 *
	 *  @param {Array<EcPpk>} ppks Array of ppks
	 *  @return true iff this PPK in ppks.
	 *  @method inArray
	 */
	inArray(ppks) {
		for (var i = 0; i < ppks.length; i++) {
			if (ppks[i].equals(this)) return true;
		}
		return false;
	}
};
