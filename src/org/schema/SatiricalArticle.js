const schema = {};
schema.Article = require("./Article.js");
/**
 * Schema.org/SatiricalArticle
 * An [[Article]] whose content is primarily [[satirical]](https://en.wikipedia.org/wiki/Satire) in nature, i.e. unlikely to be literally true. A satirical article is sometimes but not necessarily also a [[NewsArticle]]. [[ScholarlyArticle]]s are also sometimes satirized.
 *
 * @author schema.org
 * @class SatiricalArticle
 * @module org.schema
 * @extends Article
 */
module.exports = class SatiricalArticle extends schema.Article {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SatiricalArticle");
	}

}