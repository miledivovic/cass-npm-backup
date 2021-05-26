const schema = {};
schema.Article = require("./Article.js");
/**
 * Schema.org/ScholarlyArticle
 * A scholarly article.
 *
 * @author schema.org
 * @class ScholarlyArticle
 * @module org.schema
 * @extends Article
 */
module.exports = class ScholarlyArticle extends schema.Article {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ScholarlyArticle");
	}

}