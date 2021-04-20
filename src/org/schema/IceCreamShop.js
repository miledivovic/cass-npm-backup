/**
 * Schema.org/IceCreamShop
 * An ice cream shop.
 *
 * @author schema.org
 * @class IceCreamShop
 * @module org.schema
 */
module.exports = class IceCreamShop extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","IceCreamShop");
	}

}