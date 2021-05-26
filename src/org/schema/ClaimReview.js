const schema = {};
schema.Review = require("./Review.js");
/**
 * Schema.org/ClaimReview
 * A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed).
 *
 * @author schema.org
 * @class ClaimReview
 * @module org.schema
 * @extends Review
 */
module.exports = class ClaimReview extends schema.Review {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ClaimReview");
	}

	/**
	 * Schema.org/claimReviewed
	 * A short summary of the specific claims reviewed in a ClaimReview.
	 *
	 * @property claimReviewed
	 * @type Text
	 */
	claimReviewed;

}