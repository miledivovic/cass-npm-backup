const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/MerchantReturnEnumeration
 * MerchantReturnEnumeration enumerates several kinds of product return policy. Note that this structure may not capture all aspects of the policy.
 *
 * @author schema.org
 * @class MerchantReturnEnumeration
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class MerchantReturnEnumeration extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MerchantReturnEnumeration");
	}

}