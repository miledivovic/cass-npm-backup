var base64 = require("base64-arraybuffer");
let forge = require("node-forge");
if (typeof crypto == 'undefined')
{
	if (typeof window !== 'undefined' && window != null && window !== undefined)
		if (window.crypto != null)
			var crypto = window.crypto;
	try {
		var crypto = require('crypto').webcrypto;
	} catch (err) {
		console.log("Webcrypto not available. Tests will fail. Please upgrade, if possible, to Node 16. Non-test mode will fallback to slower cryptograpy methods.: " + err);
	}
}

let EcCrypto = require("./EcCrypto.js");
let EcAesCtrAsyncWorker = require("./EcAesCtrAsyncWorker.js");
let cassPromisify = require("../promises/helpers.js").cassPromisify;
let cassReturnAsPromise = require("../promises/helpers.js").cassReturnAsPromise;
let realCrypto = require('crypto');
/**
 *  Async version of EcAesCtr that uses browser extensions (window.crypto) to accomplish cryptography much faster.
 *  Falls back to EcAesCtrAsyncWorker, if window.crypto is not available.
 *  @class EcAesCtrAsync
 */
module.exports = class EcAesCtrAsync {
	static fipsOn(){		
		if (process && process.env && process.env.FIPS)
		if (realCrypto.getFips() == 0)
			try {
				realCrypto.setFips(true);
				//console.log("FIPS compliant crypto provider has been enabled.");
			} catch (e) {
				console.log("ERR_CRYPTO_FIPS_UNAVAILABLE",e);
			}
	}

	static fipsOff(){	
		if (process && process.env && process.env.FIPS)	
		if (realCrypto.getFips() == 1)
			try {
				realCrypto.setFips(false);
				//console.log("FIPS compliant crypto provider has been disabled.");
			} catch (e) {
				console.log("ERR_CRYPTO_FIPS_UNAVAILABLE",e);
			}
	}

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
		if (
			crypto == null ||
			crypto === undefined ||
			crypto.subtle == null ||
			crypto.subtle === undefined
		) {
			return EcAesCtrAsyncWorker.encrypt(
				plaintext,
				secret,
				iv,
				success,
				failure
			);
		}
		this.fipsOn();
		var keyUsages = [];
		keyUsages.push("encrypt", "decrypt");
		var algorithm = {};
		algorithm.name = "AES-CTR";
		algorithm.counter = base64.decode(iv);
		algorithm.length = 128;
		var data;
		data = EcCrypto.str2ab(plaintext);
		return cassPromisify(
			crypto.subtle
				.importKey(
					"raw",
					base64.decode(secret),
					algorithm,
					false,
					keyUsages
				)
				.then(function (key) {
					return crypto.subtle
						.encrypt(algorithm, key, data)
						.then(function (p1) {
							EcAesCtrAsync.fipsOff();
							return base64.encode(p1);
						});
				}),
			success,
			failure
		);
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
			var cacheGet = EcCrypto.decryptionCache[secret + iv + ciphertext];
			if (cacheGet != null) {
				return cassReturnAsPromise(cacheGet, success, failure);
			}
		}
		if (
			crypto == null ||
			crypto === undefined ||
			crypto.subtle == null ||
			crypto.subtle === undefined
		) {
			return EcAesCtrAsyncWorker.decrypt(
				ciphertext,
				secret,
				iv,
				success,
				failure
			);
		}
		this.fipsOn();
		var keyUsages = ["encrypt", "decrypt"];
		var algorithm = {};
		algorithm.name = "AES-CTR";
		algorithm.counter = base64.decode(iv);
		algorithm.length = 128;
		var data;
		data = base64.decode(ciphertext);
		return cassPromisify(
			crypto.subtle
				.importKey(
					"raw",
					base64.decode(secret),
					algorithm,
					false,
					keyUsages
				)
				.then(function (key) {
					return crypto.subtle
						.decrypt(algorithm, key, data)
						.then(function (p1) {
							EcCrypto.decryptionCache[
								secret + iv + ciphertext
							] = EcCrypto.ab2str(p1);
							EcAesCtrAsync.fipsOff();
							return EcCrypto.ab2str(p1);
						});
				}),
			success,
			failure
		);
	}
};
