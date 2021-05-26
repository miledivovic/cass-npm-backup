const schema = {};
schema.Action = require("./Action.js");
/**
 * Schema.org/InteractAction
 * The act of interacting with another person or organization.
 *
 * @author schema.org
 * @class InteractAction
 * @module org.schema
 * @extends Action
 */
module.exports = class InteractAction extends schema.Action {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","InteractAction");
	}

}