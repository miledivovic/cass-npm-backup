/**
 * Schema.org/ProductReturnPolicy
 * A ProductReturnPolicy provides information about product return policies associated with an [[Organization]] or [[Product]].
 *
 * @author schema.org
 * @class ProductReturnPolicy
 * @module org.schema
 */
module.exports = class ProductReturnPolicy extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ProductReturnPolicy");
	}
};
