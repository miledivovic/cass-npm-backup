/**
 * Schema.org/AssignAction
 * The act of allocating an action/event/task to some destination (someone or something).
 *
 * @author schema.org
 * @class AssignAction
 * @module org.schema
 */
module.exports = class AssignAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AssignAction";
	}

}