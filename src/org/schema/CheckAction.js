const schema = {};
schema.FindAction = require("./FindAction.js");
/**
 * Schema.org/CheckAction
 * An agent inspects, determines, investigates, inquires, or examines an object's accuracy, quality, condition, or state.
 *
 * @author schema.org
 * @class CheckAction
 * @module org.schema
 * @extends FindAction
 */
module.exports = class CheckAction extends schema.FindAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CheckAction");
	}

}