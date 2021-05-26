const schema = {};
schema.AutomotiveBusiness = require("./AutomotiveBusiness.js");
/**
 * Schema.org/AutoBodyShop
 * Auto body shop.
 *
 * @author schema.org
 * @class AutoBodyShop
 * @module org.schema
 * @extends AutomotiveBusiness
 */
module.exports = class AutoBodyShop extends schema.AutomotiveBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AutoBodyShop");
	}

}