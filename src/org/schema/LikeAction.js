/**
 * Schema.org/LikeAction
 * The act of expressing a positive sentiment about the object. An agent likes an object (a proposition, topic or theme) with participants.
 *
 * @author schema.org
 * @class LikeAction
 * @module org.schema
 */
module.exports = class LikeAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LikeAction");
	}

}