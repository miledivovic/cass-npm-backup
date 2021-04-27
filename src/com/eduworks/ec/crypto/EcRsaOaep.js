/**
 *  Helper methods for performing RSA Encryption methods. Uses Optimal Asymmetric
 *  Encryption Padding (OAEP) encryption and decryption. Uses RSA SSA PKCS#1 v1.5
 *  (RSASSA-PKCS1-V1_5) signing and verifying with UTF8 encoding.
 *
 *  @author fritz.ray@eduworks.com
 *  @module com.eduworks.ec
 *  @class EcRsaOaep
 */
module.exports = class EcRsaOaep {
	/**
	 *  Encrypts a block of plaintext (no more than 256 bytes) with a public key
	 *  using RSA OAEP encryption. Returns a base64 encoded ciphertext.
	 *
	 *  @param {EcPk}   pk Public Key.
	 *  @param {string} plaintext Plaintext. Does not perform encoding.
	 *  @method encrypt
	 *  @static
	 *  @deprecated For backup use only. Instead, use await on EcRsaOaepAsync.
	 */
	static encrypt(pk, plaintext) {
		if (EcCrypto.deprecationNotice == false)
			console.trace(
				"This method is deprecated. Please use await on EcRsaOaepAsync."
			);
		EcCrypto.deprecationNotice = true;
		if (typeof httpStatus != "undefined") {
			return rsaEncrypt(plaintext, pk.toPem());
		}
		return forge.util.encode64(
			pk.pk.encrypt(forge.util.encodeUtf8(plaintext), "RSA-OAEP")
		);
	}
	/**
	 *  Decrypts a block of ciphertext (no more than 256 bytes) with a private
	 *  key using RSA OAEP encryption. Returns a unencoded plaintext.
	 *
	 *  @param {EcPpk}  ppk Public private keypair.
	 *  @param {string} ciphertext Ciphertext.
	 *  @return {string} Unencoded plaintext.
	 *  @method decrypt
	 *  @static
	 *  @deprecated For backup use only. Instead, use await on EcRsaOaepAsync.
	 */
	static decrypt(ppk, ciphertext) {
		if (EcCrypto.deprecationNotice == false)
			console.trace(
				"This method is deprecated. Please use await on EcRsaOaepAsync."
			);
		EcCrypto.deprecationNotice = true;
		if (EcCrypto.caching) {
			var cacheGet = null;
			cacheGet = EcCrypto.decryptionCache[ppk.toPem() + ciphertext];
			if (cacheGet != null) {
				return cacheGet;
			}
		}
		var result;
		if (typeof httpStatus != "undefined") {
			result = rsaDecrypt(ciphertext, ppk.toPem());
		} else {
			result = forge.util.decodeUtf8(
				ppk.ppk.decrypt(forge.util.decode64(ciphertext), "RSA-OAEP")
			);
		}
		if (EcCrypto.caching) {
			EcCrypto.decryptionCache[ppk.toPem() + ciphertext] = result;
		}
		return result;
	}
	/**
	 *  Creates a signature for the provided text using the public private
	 *  keypair. May be verified with the public key. Uses SHA1 hash with a UTF8
	 *  decoding of the text. Returns base64 encoded signature.
	 *
	 *  @param {EcPpk}  ppk Public private keypair.
	 *  @param {string} text Text to sign.
	 *  @return Base64 encoded signature.
	 *  @method sign
	 *  @static
	 *  @deprecated For backup use only. Instead, use await on EcRsaOaepAsync.
	 */
	static sign(ppk, text) {
		if (EcCrypto.deprecationNotice == false)
			console.trace(
				"This method is deprecated. Please use await on EcRsaOaepAsync."
			);
		EcCrypto.deprecationNotice = true;
		if (typeof httpStatus != "undefined") {
			return rsaSign(text, ppk.toPem());
		}
		var s = forge.md.sha1.create();
		s.update(forge.util.encodeUtf8(text), "utf8");
		return forge.util.encode64(ppk.ppk.sign(s));
	}
	/**
	 *  Creates a signature for the provided text using the public private
	 *  keypair. May be verified with the public key. Uses SHA256 hash with a
	 *  UTF8 decoding of the text. Returns base64 encoded signature.
	 *
	 *  @param {EcPpk}  ppk Public private keypair.
	 *  @param {string} text Text to sign.
	 *  @return Base64 encoded signature.
	 *  @method signSha256
	 *  @static
	 *  @deprecated For backup use only. Instead, use await on EcRsaOaepAsync.
	 */
	static signSha256 = function(ppk, text) {
		if (EcCrypto.deprecationNotice == false)
			console.trace(
				"This method is deprecated. Please use await on EcRsaOaepAsync."
			);
		EcCrypto.deprecationNotice = true;
		var s = forge.md.sha256.create();
		s.update(forge.util.encodeUtf8(text), "utf8");
		return forge.util.encode64(ppk.ppk.sign(s));
	};
	/**
	 *  Verifies the integrity of the provided text using a signature and a
	 *  public key. Uses SHA1 hash with a UTF8 decoding of the text.
	 *
	 *  @param {EcPk}   pk Public key.
	 *  @param {string} text Text to verify.
	 *  @param {string} signature Base64 encoded signature.
	 *  @return True IFF the signature is valid.
	 *  @static
	 *  @method verify
	 *  @deprecated For backup use only. Instead, use await on EcRsaOaepAsync.
	 */
	static verify(pk, text, signature) {
		if (EcCrypto.deprecationNotice == false)
			console.trace(
				"This method is deprecated. Please use await on EcRsaOaepAsync."
			);
		EcCrypto.deprecationNotice = true;
		if (typeof httpStatus != "undefined") {
			return rsaVerify(signature, pk.toPem(), text);
		}
		var s = forge.md.sha1.create();
		s.update(forge.util.encodeUtf8(text), "utf8");
		try {
			return pk.verify(
				s.digest().bytes(),
				forge.util.decode64(signature)
			);
		} catch (ex) {
			return false;
		}
	}
	/**
	 *  Verifies the integrity of the provided text using a signature and a
	 *  public key. Uses SHA1 hash with a UTF8 decoding of the text.
	 *
	 *  @param {EcPk}   pk Public key.
	 *  @param {string} text Text to verify.
	 *  @param {string} signature Base64 encoded signature.
	 *  @return True IFF the signature is valid.
	 *  @static
	 *  @method verify
	 *  @deprecated For backup use only. Instead, use await on EcRsaOaepAsync.
	 */
	static verifySha256 = function(pk, text, signature) {
		if (EcCrypto.deprecationNotice == false)
			console.trace(
				"This method is deprecated. Please use await on EcRsaOaepAsync."
			);
		EcCrypto.deprecationNotice = true;
		if (typeof httpStatus != "undefined") {
			return rsaVerifySha256(signature, pk.toPem(), text);
		}
		var s = forge.md.sha256.create();
		s.update(forge.util.encodeUtf8(text), "utf8");
		try {
			return pk.verify(
				s.digest().bytes(),
				forge.util.decode64(signature)
			);
		} catch (ex) {
			return false;
		}
	};
};
