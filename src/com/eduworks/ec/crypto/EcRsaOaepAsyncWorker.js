
if (global.Worker === undefined || global.Worker == null)
	global.Worker = require("web-worker");
var PromiseWorker = require("promise-worker");
const path = require('path');
const url = require('url');
let EcCrypto = require("./EcCrypto.js");
let forge;
if (typeof __webpack_require__ === 'function') {
	forge = require("forge");
} else {
	forge = require("node-forge");
}
let cassPromisify = require("../promises/helpers.js").cassPromisify;
let cassReturnAsPromise = require("../promises/helpers.js").cassReturnAsPromise;

/**
 *  Asynchronous implementation of {{#crossLink
 *  "EcRsaOaep"}}EcRsaOaep{{/crossLink}}. Uses web workers and assumes 8 workers.
 *
 *  @author fritz.ray@eduworks.com
 *  @class this
 *  @module com.eduworks.ec
 */
module.exports = class EcRsaOaepAsyncWorker {
	static rotator = 0;
	static w = null;
	static initWorker() {
		if (Worker == undefined || Worker == null) {
			return;
		}
		if (this.w != null) {
			return;
		}
		this.rotator = 0;
		this.w = [];
		for (var index = 0; index < 8; index++) {
			this.createWorker(index);
		}
	}
	static createWorker(index) {
		let wkr = null;
		try {
			wkr = new Worker(url.pathToFileURL(path.resolve(__dirname, 'forgeAsync.js')));
		} catch (e) {
			console.trace(e);
			try {
				wkr = new Worker(path.resolve(__dirname, 'forgeAsync.js'));
			} catch (e) {
				console.trace(e);
				// Eat quietly.
			}
		}
		if (wkr != null)
			this.w.push(new PromiseWorker(wkr));
	}
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
	static encrypt(pk, plaintext, success, failure) {
		this.initWorker();
		if (!EcCrypto.testMode)
			if (this.w == null) {
				let p = new Promise((resolve, reject) => {
					resolve(EcRsaOaep.encrypt(pk, plaintext));
				});
				return cassPromisify(p, success, failure);
			}
		var worker = this.rotator++;
		this.rotator = this.rotator % 8;
		var o = {};
		o["pk"] = pk.toPem();
		o["text"] = forge.util.encodeUtf8(plaintext);
		o["cmd"] = "encryptRsaOaep";

		let p = this.w[worker].postMessage(o);
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
	static decrypt(ppk, ciphertext, success, failure) {
		if (EcCrypto.caching) {
			var cacheGet = null;
			cacheGet = EcCrypto.decryptionCache[ppk.toPem() + ciphertext];
			if (cacheGet != null) {
				return cassReturnAsPromise(cacheGet, success, failure);
			}
		}
		this.initWorker();
		if (!EcCrypto.testMode)
			if (this.w == null) {
				let p = new Promise((resolve, reject) => {
					resolve(EcRsaOaep.decrypt(ppk, ciphertext));
				});
				return cassPromisify(p, success, failure);
			}
		var worker = this.rotator++;
		this.rotator = this.rotator % 8;
		var o = {};
		o["ppk"] = ppk.toPem();
		o["text"] = ciphertext;
		o["cmd"] = "decryptRsaOaep";
		let p = this.w[worker].postMessage(o);
		p = p.then(function (decrypted) {
			return forge.util.decodeUtf8(decrypted);
		});
		if (EcCrypto.caching)
			p = p.then(function (decrypted) {
				return EcCrypto.decryptionCache[
					ppk.toPem() + ciphertext
				] = decrypted;
			});
		return cassPromisify(p, success, failure);
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
		this.initWorker();
		if (!EcCrypto.testMode)
			if (this.w == null) {
				let p = new Promise((resolve, reject) => {
					resolve(EcRsaOaep.sign(ppk, text));
				});
				return cassPromisify(p, success, failure);
			}
		var worker = this.rotator++;
		this.rotator = this.rotator % 8;
		var o = {};
		o["ppk"] = ppk.toPem();
		o["text"] = forge.util.encodeUtf8(text);
		o["cmd"] = "signRsaOaep";
		let p = this.w[worker].postMessage(o);
		return cassPromisify(p, success, failure);
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
		this.initWorker();
		if (!EcCrypto.testMode)
			if (this.w == null) {
				let p = new Promise((resolve, reject) => {
					resolve(EcRsaOaep.signSha256(ppk, text));
				});
				return cassPromisify(p, success, failure);
			}
		var worker = this.rotator++;
		this.rotator = this.rotator % 8;
		var o = {};
		o["ppk"] = ppk.toPem();
		o["text"] = forge.util.encodeUtf8(text);
		o["cmd"] = "signSha256RsaOaep";
		let p = this.w[worker].postMessage(o);
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
		this.initWorker();
		if (this.w == null) {
			let p = new Promise((resolve, reject) => {
				resolve(EcRsaOaep.verify(pk, text, signature));
			});
			return cassPromisify(p, success, failure);
		}
		var worker = this.rotator++;
		this.rotator = this.rotator % 8;
		var o = {};
		o["pk"] = pk.toPem();
		o["text"] = forge.util.encodeUtf8(text);
		o["signature"] = signature;
		o["cmd"] = "verifyRsaOaep";
		let p = this.w[worker].postMessage(o);
		return cassPromisify(p, success, failure);
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
		this.initWorker();
		if (this.w == null) {
			let p = new Promise((resolve, reject) => {
				resolve(EcRsaOaep.verify(pk, text, signature));
			});
			return cassPromisify(p, success, failure);
		}
		var worker = this.rotator++;
		this.rotator = this.rotator % 8;
		var o = {};
		o["pk"] = pk.toPem();
		o["text"] = forge.util.encodeUtf8(text);
		o["signature"] = signature;
		o["cmd"] = "verifyRsaOaepSha256";
		let p = this.w[worker].postMessage(o);
		return cassPromisify(p, success, failure);
	}
};
