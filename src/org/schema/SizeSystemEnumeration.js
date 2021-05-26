const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/SizeSystemEnumeration
 * Enumerates common size systems for different categories of products, for example "EN-13402" or "UK" for wearables or "Imperial" for screws.
 *
 * @author schema.org
 * @class SizeSystemEnumeration
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class SizeSystemEnumeration extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SizeSystemEnumeration");
	}

}