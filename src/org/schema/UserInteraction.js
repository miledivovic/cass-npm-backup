const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/UserInteraction
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *
 * @author schema.org
 * @class UserInteraction
 * @module org.schema
 * @extends Event
 */
module.exports = class UserInteraction extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","UserInteraction");
	}

}