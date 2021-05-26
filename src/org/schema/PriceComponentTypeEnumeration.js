const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/PriceComponentTypeEnumeration
 * Enumerates different price components that together make up the total price for an offered product.
 *
 * @author schema.org
 * @class PriceComponentTypeEnumeration
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class PriceComponentTypeEnumeration extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PriceComponentTypeEnumeration");
	}

}