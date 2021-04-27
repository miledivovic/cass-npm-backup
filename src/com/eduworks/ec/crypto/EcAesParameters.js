module.exports = class EcAesParameters {
	iv;
	constructor(iv) {
		this.iv = forge.util.decode64(iv);
	}
};
