const schema = {};
schema.ConsumeAction = require("./ConsumeAction.js");
/**
 * Schema.org/DrinkAction
 * The act of swallowing liquids.
 *
 * @author schema.org
 * @class DrinkAction
 * @module org.schema
 * @extends ConsumeAction
 */
module.exports = class DrinkAction extends schema.ConsumeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DrinkAction");
	}

}