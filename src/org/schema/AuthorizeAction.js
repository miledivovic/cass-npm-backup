const schema = {};
schema.AllocateAction = require("./AllocateAction.js");
/**
 * Schema.org/AuthorizeAction
 * The act of granting permission to an object.
 *
 * @author schema.org
 * @class AuthorizeAction
 * @module org.schema
 * @extends AllocateAction
 */
module.exports = class AuthorizeAction extends schema.AllocateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AuthorizeAction");
	}

	/**
	 * Schema.org/recipient
	 * A sub property of participant. The participant who is at the receiving end of the action.
	 *
	 * @property recipient
	 * @type Organization
	 */
	recipient;

}