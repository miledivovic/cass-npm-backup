/**
 * Schema.org/MerchantReturnPolicy
 * A MerchantReturnPolicy provides information about product return policies associated with an [[Organization]] or [[Product]].
 *
 * @author schema.org
 * @class MerchantReturnPolicy
 * @module org.schema
 */
module.exports = class MerchantReturnPolicy extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MerchantReturnPolicy");
	}
};
