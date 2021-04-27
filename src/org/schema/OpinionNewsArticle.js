/**
 * Schema.org/OpinionNewsArticle
 * An [[OpinionNewsArticle]] is a [[NewsArticle]] that primarily expresses opinions rather than journalistic reporting of news and events. For example, a [[NewsArticle]] consisting of a column or [[Blog]]/[[BlogPosting]] entry in the Opinions section of a news publication.
 *
 * @author schema.org
 * @class OpinionNewsArticle
 * @module org.schema
 */
module.exports = class OpinionNewsArticle extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "OpinionNewsArticle");
	}
};
