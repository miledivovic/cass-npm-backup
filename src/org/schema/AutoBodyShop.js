/**
 * Schema.org/AutoBodyShop
 * Auto body shop.
 *
 * @author schema.org
 * @class AutoBodyShop
 * @module org.schema
 */
module.exports = class AutoBodyShop extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AutoBodyShop");
	}

}