const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/ProductReturnEnumeration
 * ProductReturnEnumeration enumerates several kinds of product return policy. Note that this structure may not capture all aspects of the policy.
 *
 * @author schema.org
 * @class ProductReturnEnumeration
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class ProductReturnEnumeration extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ProductReturnEnumeration");
	}

}