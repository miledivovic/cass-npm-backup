/**
 * Schema.org/ProductReturnEnumeration
 * ProductReturnEnumeration enumerates several kinds of product return policy. Note that this structure may not capture all aspects of the policy.
 *
 * @author schema.org
 * @class ProductReturnEnumeration
 * @module org.schema
 */
public class ProductReturnEnumeration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ProductReturnEnumeration";
	}

}