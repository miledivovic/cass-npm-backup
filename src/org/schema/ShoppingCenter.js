/**
 * Schema.org/ShoppingCenter
 * A shopping center or mall.
 *
 * @author schema.org
 * @class ShoppingCenter
 * @module org.schema
 */
module.exports = class ShoppingCenter extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ShoppingCenter");
	}
};
