/**
 * Schema.org/ReviewAction
 * The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review.
 *
 * @author schema.org
 * @class ReviewAction
 * @module org.schema
 */
module.exports = class ReviewAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ReviewAction";
	}

}