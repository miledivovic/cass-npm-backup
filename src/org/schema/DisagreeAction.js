const schema = {};
schema.ReactAction = require("./ReactAction.js");
/**
 * Schema.org/DisagreeAction
 * The act of expressing a difference of opinion with the object. An agent disagrees to/about an object (a proposition, topic or theme) with participants.
 *
 * @author schema.org
 * @class DisagreeAction
 * @module org.schema
 * @extends ReactAction
 */
module.exports = class DisagreeAction extends schema.ReactAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DisagreeAction");
	}

}