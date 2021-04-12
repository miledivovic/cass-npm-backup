/**
 * Schema.org/ProductReturnPolicy
 * A ProductReturnPolicy provides information about product return policies associated with an [[Organization]] or [[Product]].
 *
 * @author schema.org
 * @class ProductReturnPolicy
 * @module org.schema
 */
public class ProductReturnPolicy extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ProductReturnPolicy";
	}

}