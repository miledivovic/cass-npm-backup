const schema = {};
schema.AllocateAction = require("./AllocateAction.js");
/**
 * Schema.org/AssignAction
 * The act of allocating an action/event/task to some destination (someone or something).
 *
 * @author schema.org
 * @class AssignAction
 * @module org.schema
 * @extends AllocateAction
 */
module.exports = class AssignAction extends schema.AllocateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AssignAction");
	}

}