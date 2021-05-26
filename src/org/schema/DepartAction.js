const schema = {};
schema.MoveAction = require("./MoveAction.js");
/**
 * Schema.org/DepartAction
 * The act of  departing from a place. An agent departs from an fromLocation for a destination, optionally with participants.
 *
 * @author schema.org
 * @class DepartAction
 * @module org.schema
 * @extends MoveAction
 */
module.exports = class DepartAction extends schema.MoveAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DepartAction");
	}

}