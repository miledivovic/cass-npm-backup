const schema = {};
schema.ReactAction = require("./ReactAction.js");
/**
 * Schema.org/AgreeAction
 * The act of expressing a consistency of opinion with the object. An agent agrees to/about an object (a proposition, topic or theme) with participants.
 *
 * @author schema.org
 * @class AgreeAction
 * @module org.schema
 * @extends ReactAction
 */
module.exports = class AgreeAction extends schema.ReactAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AgreeAction");
	}

}