/**
 * Schema.org/CheckAction
 * An agent inspects, determines, investigates, inquires, or examines an object's accuracy, quality, condition, or state.
 *
 * @author schema.org
 * @class CheckAction
 * @module org.schema
 */
module.exports = class CheckAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "CheckAction";
	}

}