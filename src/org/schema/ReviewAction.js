const schema = {};
schema.AssessAction = require("./AssessAction.js");
/**
 * Schema.org/ReviewAction
 * The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review.
 *
 * @author schema.org
 * @class ReviewAction
 * @module org.schema
 * @extends AssessAction
 */
module.exports = class ReviewAction extends schema.AssessAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ReviewAction");
	}

	/**
	 * Schema.org/resultReview
	 * A sub property of result. The review that resulted in the performing of the action.
	 *
	 * @property resultReview
	 * @type Review
	 */
	resultReview;

}