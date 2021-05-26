const schema = {};
schema.ReactAction = require("./ReactAction.js");
/**
 * Schema.org/DislikeAction
 * The act of expressing a negative sentiment about the object. An agent dislikes an object (a proposition, topic or theme) with participants.
 *
 * @author schema.org
 * @class DislikeAction
 * @module org.schema
 * @extends ReactAction
 */
module.exports = class DislikeAction extends schema.ReactAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DislikeAction");
	}

}