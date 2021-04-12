/**
 * Schema.org/ProductCollection
 * A set of products (either [[ProductGroup]]s or specific variants) that are listed together e.g. in an [[Offer]].
 *
 * @author schema.org
 * @class ProductCollection
 * @module org.schema
 * @extends Product
 */
public class ProductCollection extends schema.Product {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ProductCollection";
	}

}