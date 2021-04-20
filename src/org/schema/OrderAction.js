/**
 * Schema.org/OrderAction
 * An agent orders an object/product/service to be delivered/sent.
 *
 * @author schema.org
 * @class OrderAction
 * @module org.schema
 */
module.exports = class OrderAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OrderAction");
	}

}