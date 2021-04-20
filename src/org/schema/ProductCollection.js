global.schema.Product = require("./Product.js");
/**
 * Schema.org/ProductCollection
 * A set of products (either [[ProductGroup]]s or specific variants) that are listed together e.g. in an [[Offer]].
 *
 * @author schema.org
 * @class ProductCollection
 * @module org.schema
 * @extends Product
 */
module.exports = class ProductCollection extends schema.Product {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ProductCollection");
	}

}