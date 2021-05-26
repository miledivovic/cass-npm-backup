const schema = {};
schema.Action = require("./Action.js");
/**
 * Schema.org/AssessAction
 * The act of forming one's opinion, reaction or sentiment.
 *
 * @author schema.org
 * @class AssessAction
 * @module org.schema
 * @extends Action
 */
module.exports = class AssessAction extends schema.Action {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AssessAction");
	}

}