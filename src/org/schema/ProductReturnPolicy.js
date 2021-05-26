const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/ProductReturnPolicy
 * A ProductReturnPolicy provides information about product return policies associated with an [[Organization]] or [[Product]].
 *
 * @author schema.org
 * @class ProductReturnPolicy
 * @module org.schema
 * @extends Intangible
 */
module.exports = class ProductReturnPolicy extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ProductReturnPolicy");
	}

	/**
	 * Schema.org/productReturnDays
	 * The productReturnDays property indicates the number of days (from purchase) within which relevant product return policy is applicable.
	 *
	 * @property productReturnDays
	 * @type Integer
	 */
	productReturnDays;

	/**
	 * Schema.org/productReturnLink
	 * Indicates a Web page or service by URL, for product return.
	 *
	 * @property productReturnLink
	 * @type URL
	 */
	productReturnLink;

}