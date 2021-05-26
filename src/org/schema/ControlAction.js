const schema = {};
schema.Action = require("./Action.js");
/**
 * Schema.org/ControlAction
 * An agent controls a device or application.
 *
 * @author schema.org
 * @class ControlAction
 * @module org.schema
 * @extends Action
 */
module.exports = class ControlAction extends schema.Action {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ControlAction");
	}

}