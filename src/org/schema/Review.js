const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Review
 * A review of an item - for example, of a restaurant, movie, or store.
 *
 * @author schema.org
 * @class Review
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Review extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Review");
	}

	/**
	 * Schema.org/reviewAspect
	 * This Review or Rating is relevant to this part or facet of the itemReviewed.
	 *
	 * @property reviewAspect
	 * @type Text
	 */
	reviewAspect;

	/**
	 * Schema.org/reviewBody
	 * The actual body of the review.
	 *
	 * @property reviewBody
	 * @type Text
	 */
	reviewBody;

	/**
	 * Schema.org/itemReviewed
	 * The item that is being reviewed/rated.
	 *
	 * @property itemReviewed
	 * @type Thing
	 */
	itemReviewed;

	/**
	 * Schema.org/reviewRating
	 * The rating given in this review. Note that reviews can themselves be rated. The ```reviewRating``` applies to rating given by the review. The [[aggregateRating]] property applies to the review itself, as a creative work.
	 *
	 * @property reviewRating
	 * @type Rating
	 */
	reviewRating;

}