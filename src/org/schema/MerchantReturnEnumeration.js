/**
 * Schema.org/MerchantReturnEnumeration
 * MerchantReturnEnumeration enumerates several kinds of product return policy. Note that this structure may not capture all aspects of the policy.
 *
 * @author schema.org
 * @class MerchantReturnEnumeration
 * @module org.schema
 */
module.exports = class MerchantReturnEnumeration extends EcRemoteLinkedData {
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