/**
 * Schema.org/MerchantReturnEnumeration
 * MerchantReturnEnumeration enumerates several kinds of product return policy. Note that this structure may not capture all aspects of the policy.
 *
 * @author schema.org
 * @class MerchantReturnEnumeration
 * @module org.schema
 */
public class MerchantReturnEnumeration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MerchantReturnEnumeration";
	}

}