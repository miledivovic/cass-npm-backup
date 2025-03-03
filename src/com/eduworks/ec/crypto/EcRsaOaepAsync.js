var base64 = require("base64-arraybuffer");
let forge = require("node-forge");
if (typeof crypto === 'undefined') {
	var crypto = null;
	try {
		crypto = require('crypto').webcrypto;
	} catch (err) {
		console.log("Webcrypto not available. Tests will fail. Please upgrade, if possible, to Node 16. Non-test mode will fallback to slower cryptograpy methods.: " + err);
	}
}
let EcCrypto = require("./EcCrypto.js");
let EcRsaOaepAsyncWorker = require("./EcRsaOaepAsyncWorker.js");
let cassPromisify = require("../promises/helpers.js").cassPromisify;
let cassReturnAsPromise = require("../promises/helpers.js").cassReturnAsPromise;
/**
 *  Async version of EcRsaOaep that uses browser extensions (window.crypto) to accomplish cryptography much faster.
 *  Falls back to EcRsaOaepAsyncWorker, if window.crypto is not available.
 *  @class EcRsaOaepAsync
 */
module.exports = class EcRsaOaepAsync {
	/**
	 *  Asynchronous form of {{#crossLink
	 *  "EcRsaOaep/encrypt:method"}}EcRsaOaep.encrypt{{/crossLink}}
	 *
	 *  @param {EcPk}             pk Public Key to use to encrypt.
	 *  @param {string}           plaintext Plaintext to encrypt.
	 *  @param {function(string)} success Success method, result is Base64
	 *                            encoded Ciphertext.
	 *  @param {function(string)} failure Failure method, parameter is error
	 *                            message.
	 *  @method encrypt
	 *  @static
	 */
	static encrypt(pk, plainText, success, failure) {
		if (
			crypto == null ||
			crypto === undefined ||
			crypto.subtle == null ||
			crypto.subtle === undefined
		) {
			return EcRsaOaepAsyncWorker.encrypt(
				pk,
				plainText,
				success,
				failure
			);
		}
		var keyUsages = [];
		keyUsages.push("encrypt");
		var algorithm = {};
		algorithm.name = "RSA-OAEP";
		algorithm.hash = "SHA-1";
		let p = null;
		if (pk.key == null) {
			p = crypto.subtle
				.importKey("jwk", pk.toJwk(), algorithm, false, keyUsages)
				.then(function (key) {
					pk.key = key;
					return crypto.subtle.encrypt(
						algorithm,
						key,
						EcCrypto.str2ab(forge.util.encodeUtf8(plainText))
					);
				});
		} else {
			p = crypto.subtle.encrypt(
				algorithm,
				pk.key,
				EcCrypto.str2ab(forge.util.encodeUtf8(plainText))
			);
		}
		p = p.then((result) => {
			return base64.encode(result);
		});
		return cassPromisify(p, success, failure);
	}
	/**
	 *  Asynchronous form of {{#crossLink
	 *  "EcRsaOaep/decrypt:method"}}EcRsaOaep.decrypt{{/crossLink}}
	 *
	 *  @param {EcPpk}            ppk Public private keypair to use to decrypt.
	 *  @param {string}           ciphertext Ciphertext to decrypt.
	 *  @param {function(string)} success Success method, result is unencoded
	 *                            plaintext.
	 *  @param {function(string)} failure Failure method, parameter is error
	 *                            message.
	 *  @method decrypt
	 *  @static
	 */
	static decrypt(ppk, cipherText, success, failure) {
		if (EcCrypto.caching) {
			var cacheGet = null;
			cacheGet = EcCrypto.decryptionCache[ppk.toPem() + cipherText];
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
			return EcRsaOaepAsyncWorker.decrypt(
				ppk,
				cipherText,
				success,
				failure
			);
		}
		var algorithm = {};
		algorithm.name = "RSA-OAEP";
		algorithm.hash = "SHA-1";
		let afterKeyIsImported = (p1) => {
			try {
				var result = forge.util.decodeUtf8(EcCrypto.ab2str(p1));
			} catch (ex) {
				var result = EcCrypto.ab2str(p1);
			}
			if (EcCrypto.caching) {
				EcCrypto.decryptionCache[ppk.toPem() + cipherText] = result;
			}
			return result;
		};
		if (ppk.key == null) {
			var keyUsages = [];
			keyUsages.push("decrypt");
			let p = crypto.subtle
				.importKey("jwk", ppk.toJwk(), algorithm, false, keyUsages)
				.then(function (key) {
					ppk.key = key;
					return crypto.subtle.decrypt(
						algorithm,
						key,
						base64.decode(cipherText)
					);
				})
				.then(afterKeyIsImported)
				.catch((error) => {
					console.trace(ppk, cipherText, error);
					return null;
				});
			return cassPromisify(p, success, failure);
		} else {
			let p = crypto.subtle
				.decrypt(algorithm, ppk.key, base64.decode(cipherText))
				.then(afterKeyIsImported)
				.catch((error) => {
					console.trace(error);
					return null;
				});
			return cassPromisify(p, success, failure);
		}
	}
	/**
	 *  Asynchronous form of {{#crossLink
	 *  "EcRsaOaep/sign:method"}}EcRsaOaep.sign{{/crossLink}}
	 *
	 *  @param {EcPpk}            ppk Public private keypair to use to sign message.
	 *  @param {string}           text Text to sign.
	 *  @param {function(string)} success Success method, result is Base64
	 *                            encoded signature.
	 *  @param {function(string)} failure Failure method, parameter is error
	 *                            message.
	 *  @method sign
	 *  @static
	 */
	static sign(ppk, text, success, failure) {
		if (
			crypto == null ||
			crypto === undefined ||
			crypto.subtle == null ||
			crypto.subtle === undefined
		) {
			return EcRsaOaepAsyncWorker.sign(ppk, text, success, failure);
		}
		if (text == null) {
			return cassReturnAsPromise(null, success, failure);
		}
		var keyUsages = [];
		keyUsages.push("sign");
		var algorithm = {};
		algorithm.name = "RSASSA-PKCS1-v1_5";
		algorithm.hash = "SHA-1";
		if (ppk.signKey == null)
			return cassPromisify(
				crypto.subtle
					.importKey("jwk", ppk.toJwk(), algorithm, false, keyUsages)
					.then(function (key) {
						ppk.signKey = key;
						return crypto.subtle
							.sign(
								algorithm,
								key,
								EcCrypto.str2ab(forge.util.encodeUtf8(text))
							)
							.then(function (p1) {
								return base64.encode(p1);
							});
					}),
				success,
				failure
			);
		else
			return cassPromisify(
				crypto.subtle
					.sign(
						algorithm,
						ppk.signKey,
						EcCrypto.str2ab(forge.util.encodeUtf8(text))
					)
					.then(function (p1) {
						return base64.encode(p1);
					}),
				success,
				failure
			);
	}
	/**
	 *  Asynchronous form of {{#crossLink
	 *  "EcRsaOaep/signSha256:method"}}EcRsaOaep.signSha256{{/crossLink}}
	 *
	 *  @param {EcPpk}            ppk Public private keypair to use to sign message.
	 *  @param {string}           text Text to sign.
	 *  @param {function(string)} success Success method, result is Base64
	 *                            encoded signature.
	 *  @param {function(string)} failure Failure method, parameter is error
	 *                            message.
	 *  @method signSha256
	 *  @static
	 */
	static signSha256 = function (ppk, text, success, failure) {
		if (
			crypto == null ||
			crypto === undefined ||
			crypto.subtle == null ||
			crypto.subtle === undefined
		) {
			return EcRsaOaepAsyncWorker.sign(ppk, text, success, failure);
		}
		var keyUsages = [];
		keyUsages.push("sign");
		var algorithm = {};
		algorithm.name = "RSASSA-PKCS1-v1_5";
		algorithm.hash = "SHA-256";
		let p = null;
		if (ppk.signKey256 == null)
			p = crypto.subtle
				.importKey("jwk", ppk.toJwk(), algorithm, false, keyUsages)
				.then(function (key) {
					ppk.signKey256 = key;
					return crypto.subtle.sign(
						algorithm,
						key,
						EcCrypto.str2ab(forge.util.encodeUtf8(text))
					);
				});
		else
			p = crypto.subtle.sign(
				algorithm,
				ppk.signKey256,
				EcCrypto.str2ab(forge.util.encodeUtf8(text))
			);

		p = p.then(function (p1) {
			return base64.encode(p1);
		});
		return cassPromisify(p, success, failure);
	};
	/**
	 *  Asynchronous form of {{#crossLink
	 *  "EcRsaOaep/verify:method"}}EcRsaOaep.verify{{/crossLink}}
	 *
	 *  @param {EcPk}              pk Public key to use to verify message.
	 *  @param {string}            text Text to use in verification.
	 *  @param {string}            signature Signature to use in verification.
	 *  @param {function(boolean)} success Success method, result is whether
	 *                             signature is valid.
	 *  @param {function(string)}  failure Failure method, parameter is error
	 *                             message.
	 *  @method verify
	 *  @static
	 */
	static verify(pk, text, signature, success, failure) {
		if (
			crypto == null ||
			crypto === undefined ||
			crypto.subtle == null ||
			crypto.subtle === undefined
		) {
			return EcRsaOaepAsyncWorker.verify(
				pk,
				text,
				signature,
				success,
				failure
			);
		}
		var algorithm = {};
		algorithm.name = "RSASSA-PKCS1-v1_5";
		algorithm.hash = "SHA-1";
		if (pk.signKey == null) {
			var keyUsages = [];
			keyUsages.push("verify");
			return cassPromisify(
				crypto.subtle
					.importKey("jwk", pk.toJwk(), algorithm, false, keyUsages)
					.then((key) => {
						pk.signKey = key;
						return crypto.subtle.verify(
							algorithm,
							key,
							base64.decode(signature),
							EcCrypto.str2ab(forge.util.encodeUtf8(text))
						);
					}),
				success,
				failure
			);
		} else {
			return cassPromisify(
				crypto.subtle.verify(
					algorithm,
					pk.signKey,
					base64.decode(signature),
					EcCrypto.str2ab(forge.util.encodeUtf8(text))
				),
				success,
				failure
			);
		}
	}
	/**
	 *  Asynchronous form of {{#crossLink
	 *  "EcRsaOaep/verify:method"}}EcRsaOaep.verify{{/crossLink}}
	 *
	 *  @param {EcPk}              pk Public key to use to verify message.
	 *  @param {string}            text Text to use in verification.
	 *  @param {string}            signature Signature to use in verification.
	 *  @param {function(boolean)} success Success method, result is whether
	 *                             signature is valid.
	 *  @param {function(string)}  failure Failure method, parameter is error
	 *                             message.
	 *  @method verify
	 *  @static
	 */
	static verifySha256(pk, text, signature, success, failure) {
		if (
			crypto == null ||
			crypto === undefined ||
			crypto.subtle == null ||
			crypto.subtle === undefined
		) {
			return EcRsaOaepAsyncWorker.verify(
				pk,
				text,
				signature,
				success,
				failure
			);
		}
		var algorithm = {};
		algorithm.name = "RSASSA-PKCS1-v1_5";
		algorithm.hash = "SHA-256";
		if (pk.signKey256 == null) {
			var keyUsages = [];
			keyUsages.push("verify");
			return cassPromisify(
				crypto.subtle
					.importKey("jwk", pk.toJwk(), algorithm, false, keyUsages)
					.then(function (key) {
						pk.signKey256 = key;
						return crypto.subtle.verify(
							algorithm,
							key,
							base64.decode(signature),
							EcCrypto.str2ab(forge.util.encodeUtf8(text))
						);
					}),
				success,
				failure
			);
		} else {
			return cassPromisify(
				crypto.subtle.verify(
					algorithm,
					pk.signKey256,
					base64.decode(signature),
					EcCrypto.str2ab(forge.util.encodeUtf8(text))
				),
				success,
				failure
			);
		}
	}
};
