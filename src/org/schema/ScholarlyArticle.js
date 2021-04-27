/**
 * Schema.org/ScholarlyArticle
 * A scholarly article.
 *
 * @author schema.org
 * @class ScholarlyArticle
 * @module org.schema
 */
module.exports = class ScholarlyArticle extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ScholarlyArticle");
	}
};
