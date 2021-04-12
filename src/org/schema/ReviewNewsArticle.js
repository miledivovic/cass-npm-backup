/**
 * Schema.org/ReviewNewsArticle
 * A [[NewsArticle]] and [[CriticReview]] providing a professional critic's assessment of a service, product, performance, or artistic or literary work.
 *
 * @author schema.org
 * @class ReviewNewsArticle
 * @module org.schema
 * @extends CriticReview
 */
public class ReviewNewsArticle extends schema.CriticReview {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ReviewNewsArticle";
	}

}