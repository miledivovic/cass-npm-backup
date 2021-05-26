const schema = {};
schema.UpdateAction = require("./UpdateAction.js");
/**
 * Schema.org/DeleteAction
 * The act of editing a recipient by removing one of its objects.
 *
 * @author schema.org
 * @class DeleteAction
 * @module org.schema
 * @extends UpdateAction
 */
module.exports = class DeleteAction extends schema.UpdateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DeleteAction");
	}

}