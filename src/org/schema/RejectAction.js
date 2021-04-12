/**
 * Schema.org/RejectAction
 * The act of rejecting to/adopting an object.\n\nRelated actions:\n\n* [[AcceptAction]]: The antonym of RejectAction.
 *
 * @author schema.org
 * @class RejectAction
 * @module org.schema
 */
module.exports = class RejectAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "RejectAction";
	}

}