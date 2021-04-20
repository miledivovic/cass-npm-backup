/**
 * Schema.org/ClaimReview
 * A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed).
 *
 * @author schema.org
 * @class ClaimReview
 * @module org.schema
 */
module.exports = class ClaimReview extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ClaimReview");
	}

}