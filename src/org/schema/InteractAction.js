/**
 * Schema.org/InteractAction
 * The act of interacting with another person or organization.
 *
 * @author schema.org
 * @class InteractAction
 * @module org.schema
 */
module.exports = class InteractAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "InteractAction";
	}

}