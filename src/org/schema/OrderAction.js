/**
 * Schema.org/OrderAction
 * An agent orders an object/product/service to be delivered/sent.
 *
 * @author schema.org
 * @class OrderAction
 * @module org.schema
 */
public class OrderAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "OrderAction";
	}

}