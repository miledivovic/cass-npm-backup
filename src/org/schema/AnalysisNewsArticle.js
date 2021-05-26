const schema = {};
schema.NewsArticle = require("./NewsArticle.js");
/**
 * Schema.org/AnalysisNewsArticle
 * An AnalysisNewsArticle is a [[NewsArticle]] that, while based on factual reporting, incorporates the expertise of the author/producer, offering interpretations and conclusions.
 *
 * @author schema.org
 * @class AnalysisNewsArticle
 * @module org.schema
 * @extends NewsArticle
 */
module.exports = class AnalysisNewsArticle extends schema.NewsArticle {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AnalysisNewsArticle");
	}

}