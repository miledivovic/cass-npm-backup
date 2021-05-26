const schema = {};
schema.Article = require("./Article.js");
/**
 * Schema.org/SocialMediaPosting
 * A post to a social media platform, including blog posts, tweets, Facebook posts, etc.
 *
 * @author schema.org
 * @class SocialMediaPosting
 * @module org.schema
 * @extends Article
 */
module.exports = class SocialMediaPosting extends schema.Article {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SocialMediaPosting");
	}

	/**
	 * Schema.org/sharedContent
	 * A CreativeWork such as an image, video, or audio clip shared as part of this posting.
	 *
	 * @property sharedContent
	 * @type CreativeWork
	 */
	sharedContent;

}