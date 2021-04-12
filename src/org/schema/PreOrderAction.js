/**
 * Schema.org/PreOrderAction
 * An agent orders a (not yet released) object/product/service to be delivered/sent.
 *
 * @author schema.org
 * @class PreOrderAction
 * @module org.schema
 */
module.exports = class PreOrderAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PreOrderAction";
	}

}