const schema = {};
schema.NewsArticle = require("./NewsArticle.js");
/**
 * Schema.org/AskPublicNewsArticle
 * A [[NewsArticle]] expressing an open call by a [[NewsMediaOrganization]] asking the public for input, insights, clarifications, anecdotes, documentation, etc., on an issue, for reporting purposes.
 *
 * @author schema.org
 * @class AskPublicNewsArticle
 * @module org.schema
 * @extends NewsArticle
 */
module.exports = class AskPublicNewsArticle extends schema.NewsArticle {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AskPublicNewsArticle");
	}

}