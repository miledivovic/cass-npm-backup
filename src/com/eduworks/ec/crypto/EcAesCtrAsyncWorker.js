/**
 *  Asynchronous implementation of {{#crossLink
 *  "EcAesCtr"}}EcAesCtr{{/crossLink}}. Uses web workers and assumes 8 workers.
 *
 *  @author fritz.ray@eduworks.com
 *  @class EcAesCtrAsyncWorker
 *  @module com.eduworks.ec
 */
module.exports = class EcAesCtrAsyncWorker {
	/**
	 *  Asynchronous form of {{#crossLink
	 *  "EcAesCtr/encrypt:method"}}EcAesCtr.encrypt{{/crossLink}}
	 *
	 *  @param {string}           plaintext Text to encrypt.
	 *  @param {string}           secret Secret to use to encrypt.
	 *  @param {string}           iv Initialization Vector to use to encrypt.
	 *  @param {function(string)} success Success method, result is Base64
	 *                            encoded Ciphertext.
	 *  @param {function(string)} failure Failure method, parameter is error
	 *                            message.
	 *  @method encrypt
	 *  @static
	 */
	static encrypt(plaintext, secret, iv, success, failure) {
		EcRsaOaepAsyncWorker.initWorker();
		if (!EcAesCtrAsyncWorker.w == null) {
			return cassReturnAsPromise(
				EcAesCtr.encrypt(plaintext, secret, iv),
				success,
				failure
			);
		}
		var worker = EcRsaOaepAsyncWorker.rotator++;
		EcRsaOaepAsyncWorker.rotator = EcRsaOaepAsyncWorker.rotator % 8;
		var o = {};
		o["secret"] = secret;
		o["iv"] = iv;
		o["text"] = forge.util.encodeUtf8(plaintext);
		o["cmd"] = "encryptAesCtr";
		return EcRsaOaepAsyncWorker.w[worker].postMessage(o);
	}
	/**
	 *  Asynchronous form of {{#crossLink
	 *  "EcAesCtr/decrypt:method"}}EcAesCtr.decrypt{{/crossLink}}
	 *
	 *  @param {string}           ciphertext Text to decrypt.
	 *  @param {string}           secret Secret to use to decrypt.
	 *  @param {string}           iv Initialization Vector to use to decrypt.
	 *  @param {function(string)} success Success method, result is Plaintext
	 *                            with no encoding.
	 *  @param {function(string)} failure Failure method, parameter is error
	 *                            message.
	 *  @method decrypt
	 *  @static
	 */
	static decrypt(ciphertext, secret, iv, success, failure) {
		if (EcCrypto.caching) {
			var cacheGet = null;
			cacheGet = EcCrypto.decryptionCache[secret + iv + ciphertext];
			if (cacheGet != null) {
				success(cacheGet);
				return;
			}
		}
		EcRsaOaepAsyncWorker.initWorker();
		if (!EcRsaOaepAsyncWorker.w == null) {
			return cassReturnAsPromise(
				EcAesCtr.decrypt(ciphertext, secret, iv),
				success,
				failure
			);
		}
		var worker = EcRsaOaepAsyncWorker.rotator++;
		EcRsaOaepAsyncWorker.rotator = EcRsaOaepAsyncWorker.rotator % 8;
		var o = {};
		o["secret"] = secret;
		o["iv"] = iv;
		o["text"] = ciphertext;
		o["cmd"] = "decryptAesCtr";
		let p = EcRsaOaepAsyncWorker.w[worker].postMessage(o);
		p = p.then((decrypted) => {
			return forge.util.decodeUtf8(decrypted);
		});
		if (EcCrypto.caching)
			p = p.then((decrypted) => {
				return EcCrypto.decryptionCache[
					secret + iv + ciphertext
				] = decrypted;
			});
		return cassPromisify(p, success, failure);
	}
};
