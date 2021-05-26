const schema = {};
schema.UserInteraction = require("./UserInteraction.js");
/**
 * Schema.org/UserPlays
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *
 * @author schema.org
 * @class UserPlays
 * @module org.schema
 * @extends UserInteraction
 */
module.exports = class UserPlays extends schema.UserInteraction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","UserPlays");
	}

}