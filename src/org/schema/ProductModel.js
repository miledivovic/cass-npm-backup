/**
 * Schema.org/ProductModel
 * A datasheet or vendor specification of a product (in the sense of a prototypical description).
 *
 * @author schema.org
 * @class ProductModel
 * @module org.schema
 */
module.exports = class ProductModel extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ProductModel");
	}

}