/**
 * Schema.org/SaleEvent
 * Event type: Sales event.
 *
 * @author schema.org
 * @class SaleEvent
 * @module org.schema
 */
module.exports = class SaleEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "SaleEvent");
	}
};
