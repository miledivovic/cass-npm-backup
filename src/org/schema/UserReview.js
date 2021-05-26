const schema = {};
schema.Review = require("./Review.js");
/**
 * Schema.org/UserReview
 * A review created by an end-user (e.g. consumer, purchaser, attendee etc.), in contrast with [[CriticReview]].
 *
 * @author schema.org
 * @class UserReview
 * @module org.schema
 * @extends Review
 */
module.exports = class UserReview extends schema.Review {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","UserReview");
	}

}