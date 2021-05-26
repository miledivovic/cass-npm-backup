const schema = {};
schema.Product = require("./Product.js");
/**
 * Schema.org/ProductModel
 * A datasheet or vendor specification of a product (in the sense of a prototypical description).
 *
 * @author schema.org
 * @class ProductModel
 * @module org.schema
 * @extends Product
 */
module.exports = class ProductModel extends schema.Product {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ProductModel");
	}

	/**
	 * Schema.org/isVariantOf
	 * Indicates the kind of product that this is a variant of. In the case of [[ProductModel]], this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a [[ProductGroup]], the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with [[ProductGroup]], this property can apply to any [[Product]] included in the group.
	 *
	 * @property isVariantOf
	 * @type ProductGroup
	 */
	isVariantOf;

	/**
	 * Schema.org/predecessorOf
	 * A pointer from a previous, often discontinued variant of the product to its newer variant.
	 *
	 * @property predecessorOf
	 * @type ProductModel
	 */
	predecessorOf;

	/**
	 * Schema.org/successorOf
	 * A pointer from a newer variant of a product  to its previous, often discontinued predecessor.
	 *
	 * @property successorOf
	 * @type ProductModel
	 */
	successorOf;

}