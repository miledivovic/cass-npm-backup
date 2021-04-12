/**
 * Schema.org/DeleteAction
 * The act of editing a recipient by removing one of its objects.
 *
 * @author schema.org
 * @class DeleteAction
 * @module org.schema
 */
module.exports = class DeleteAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DeleteAction";
	}

}