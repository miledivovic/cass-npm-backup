const schema = {};
schema.InteractAction = require("./InteractAction.js");
/**
 * Schema.org/MarryAction
 * The act of marrying a person.
 *
 * @author schema.org
 * @class MarryAction
 * @module org.schema
 * @extends InteractAction
 */
module.exports = class MarryAction extends schema.InteractAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MarryAction");
	}

}