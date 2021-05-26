const schema = {};
schema.LegalService = require("./LegalService.js");
/**
 * Schema.org/Notary
 * A notary.
 *
 * @author schema.org
 * @class Notary
 * @module org.schema
 * @extends LegalService
 */
module.exports = class Notary extends schema.LegalService {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Notary");
	}

}