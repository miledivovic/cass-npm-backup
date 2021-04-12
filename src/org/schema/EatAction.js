/**
 * Schema.org/EatAction
 * The act of swallowing solid objects.
 *
 * @author schema.org
 * @class EatAction
 * @module org.schema
 */
module.exports = class EatAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "EatAction";
	}

}