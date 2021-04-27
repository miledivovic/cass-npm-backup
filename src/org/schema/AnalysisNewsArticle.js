/**
 * Schema.org/AnalysisNewsArticle
 * An AnalysisNewsArticle is a [[NewsArticle]] that, while based on factual reporting, incorporates the expertise of the author/producer, offering interpretations and conclusions.
 *
 * @author schema.org
 * @class AnalysisNewsArticle
 * @module org.schema
 */
module.exports = class AnalysisNewsArticle extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "AnalysisNewsArticle");
	}
};
