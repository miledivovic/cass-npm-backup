/**
 * Schema.org/ClaimReview
 * A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed).
 *
 * @author schema.org
 * @class ClaimReview
 * @module org.schema
 */
public class ClaimReview extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ClaimReview";
	}

}