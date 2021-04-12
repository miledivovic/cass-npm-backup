/**
 * Schema.org/SaleEvent
 * Event type: Sales event.
 *
 * @author schema.org
 * @class SaleEvent
 * @module org.schema
 */
public class SaleEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SaleEvent";
	}

}