const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Rating
 * A rating is an evaluation on a numeric scale, such as 1 to 5 stars.
 *
 * @author schema.org
 * @class Rating
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Rating extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Rating");
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
	 * Schema.org/ratingValue
	 * The rating for the content.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
	 *
	 * @property ratingValue
	 * @type Number
	 */
	ratingValue;

	/**
	 * Schema.org/worstRating
	 * The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed.
	 *
	 * @property worstRating
	 * @type Number
	 */
	worstRating;

	/**
	 * Schema.org/author
	 * The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
	 *
	 * @property author
	 * @type Organization
	 */
	author;

	/**
	 * Schema.org/ratingExplanation
	 * A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with "fact check" markup using [[ClaimReview]].
	 *
	 * @property ratingExplanation
	 * @type Text
	 */
	ratingExplanation;

	/**
	 * Schema.org/bestRating
	 * The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed.
	 *
	 * @property bestRating
	 * @type Number
	 */
	bestRating;

}