/**
 * Schema.org/DislikeAction
 * The act of expressing a negative sentiment about the object. An agent dislikes an object (a proposition, topic or theme) with participants.
 *
 * @author schema.org
 * @class DislikeAction
 * @module org.schema
 */
module.exports = class DislikeAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DislikeAction";
	}

}