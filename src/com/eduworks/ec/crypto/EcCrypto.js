let forge = require("node-forge");
/**
 *  @author Fritz
 *  @class EcCrypto
 */
module.exports = class EcCrypto {
	/**
	 *  Turn on (defualt off) caching of decrypted data.
	 *  @property caching
	 *  @type boolean
	 */
	static caching = false;
	static testMode = false;
	static deprecationNotice = false;
	static decryptionCache = {};
	static md5Cache = {};
	static sha256Cache = {};

	/**
	 *  Calculate MD5 hash of a string.
	 *  @param {String} s String to MD5
	 *  @return {String} MD5 hash
	 *  @static
	 *  @method md5
	 */
	static md5(s) {
		if (EcCrypto.caching) {
			if (EcCrypto.md5Cache[s] === undefined) {
				var m = forge.md.md5.create();
				m.update(s);
				EcCrypto.md5Cache[s] = m.digest().toHex();
			}
			return EcCrypto.md5Cache[s];
		}
		var m = forge.md.md5.create();
		m.update(s);
		return m.digest().toHex();
	}

	/**
	 *  Calculate SHA-256 hash of a string.
	 *  @param {String} s String to SHA-256
	 *  @return {String} SHA-256 hash
	 *  @static
	 *  @method sha256
	 */
	static sha256(s) {
		if (EcCrypto.caching) {
			if (EcCrypto.sha256Cache[s] === undefined) {
				var m = forge.md.sha256.create();
				m.update(s, "utf8");
				EcCrypto.sha256Cache[s] = m.digest().toHex();
			}
			return EcCrypto.sha256Cache[s];
		}
		var m = forge.md.sha256.create();
		m.update(s, "utf8");
		return m.digest().toHex();
	}
	static ab2str(buf) {
		return new TextDecoder("utf-8").decode(buf);
	}
	static str2ab(str) {
		return new TextEncoder("utf-8").encode(str).buffer;
	}
	static generateUUID () {
		var d = new Date().getTime();
		if (typeof window !== "undefined" && window && window.performance && typeof window.performance.now === "function") {
			d += performance.now(); // use high-precision timer if available
		}
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
		});
		return uuid;
	}
};
