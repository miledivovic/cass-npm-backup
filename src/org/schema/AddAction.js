const schema = {};
schema.UpdateAction = require("./UpdateAction.js");
/**
 * Schema.org/AddAction
 * The act of editing by adding an object to a collection.
 *
 * @author schema.org
 * @class AddAction
 * @module org.schema
 * @extends UpdateAction
 */
module.exports = class AddAction extends schema.UpdateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AddAction");
	}

}