/**
 * Schema.org/TireShop
 * A tire shop.
 *
 * @author schema.org
 * @class TireShop
 * @module org.schema
 */
module.exports = class TireShop extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TireShop");
	}

}