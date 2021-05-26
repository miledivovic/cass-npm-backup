const schema = {};
schema.Action = require("./Action.js");
/**
 * Schema.org/CreateAction
 * The act of deliberately creating/producing/generating/building a result out of the agent.
 *
 * @author schema.org
 * @class CreateAction
 * @module org.schema
 * @extends Action
 */
module.exports = class CreateAction extends schema.Action {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CreateAction");
	}

}