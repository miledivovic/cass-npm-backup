const schema = {};
schema.Product = require("./Product.js");
/**
 * Schema.org/SomeProducts
 * A placeholder for multiple similar products of the same kind.
 *
 * @author schema.org
 * @class SomeProducts
 * @module org.schema
 * @extends Product
 */
module.exports = class SomeProducts extends schema.Product {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SomeProducts");
	}

	/**
	 * Schema.org/inventoryLevel
	 * The current approximate inventory level for the item or items.
	 *
	 * @property inventoryLevel
	 * @type QuantitativeValue
	 */
	inventoryLevel;

}