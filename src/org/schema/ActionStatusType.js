/**
 * Schema.org/ActionStatusType
 * The status of an Action.
 *
 * @author schema.org
 * @class ActionStatusType
 * @module org.schema
 */
module.exports = class ActionStatusType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ActionStatusType";
	}

}