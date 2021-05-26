const schema = {};
schema.SizeGroupEnumeration = require("./SizeGroupEnumeration.js");
/**
 * Schema.org/WearableSizeGroupEnumeration
 * Enumerates common size groups (also known as "size types") for wearable products.
 *
 * @author schema.org
 * @class WearableSizeGroupEnumeration
 * @module org.schema
 * @extends SizeGroupEnumeration
 */
module.exports = class WearableSizeGroupEnumeration extends schema.SizeGroupEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WearableSizeGroupEnumeration");
	}

}