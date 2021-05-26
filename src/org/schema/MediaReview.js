const schema = {};
schema.Review = require("./Review.js");
/**
 * Schema.org/MediaReview
 * A [[MediaReview]] is a more specialized form of Review dedicated to the evaluation of media content online, typically in the context of fact-checking and misinformation.
    For more general reviews of media in the broader sense, use [[UserReview]], [[CriticReview]] or other [[Review]] types. This definition is
    a work in progress. While the [[MediaManipulationRatingEnumeration]] list reflects significant community review amongst fact-checkers and others working
    to combat misinformation, the specific structures for representing media objects, their versions and publication context, is still evolving. Similarly, best practices for the relationship between [[MediaReview]] and [[ClaimReview]] markup has not yet been finalized.
 *
 * @author schema.org
 * @class MediaReview
 * @module org.schema
 * @extends Review
 */
module.exports = class MediaReview extends schema.Review {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MediaReview");
	}

	/**
	 * Schema.org/mediaAuthenticityCategory
	 * Indicates a MediaManipulationRatingEnumeration classification of a media object (in the context of how it was published or shared).
	 *
	 * @property mediaAuthenticityCategory
	 * @type MediaManipulationRatingEnumeration
	 */
	mediaAuthenticityCategory;

}