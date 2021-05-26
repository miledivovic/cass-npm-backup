const schema = {};
schema.ConsumeAction = require("./ConsumeAction.js");
/**
 * Schema.org/UseAction
 * The act of applying an object to its intended purpose.
 *
 * @author schema.org
 * @class UseAction
 * @module org.schema
 * @extends ConsumeAction
 */
module.exports = class UseAction extends schema.ConsumeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","UseAction");
	}

}