const schema = {};
schema.Article = require("./Article.js");
/**
 * Schema.org/AdvertiserContentArticle
 * An [[Article]] that an external entity has paid to place or to produce to its specifications. Includes [advertorials](https://en.wikipedia.org/wiki/Advertorial), sponsored content, native advertising and other paid content.
 *
 * @author schema.org
 * @class AdvertiserContentArticle
 * @module org.schema
 * @extends Article
 */
module.exports = class AdvertiserContentArticle extends schema.Article {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AdvertiserContentArticle");
	}

}