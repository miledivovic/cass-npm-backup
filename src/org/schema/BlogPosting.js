const schema = {};
schema.SocialMediaPosting = require("./SocialMediaPosting.js");
/**
 * Schema.org/BlogPosting
 * A blog post.
 *
 * @author schema.org
 * @class BlogPosting
 * @module org.schema
 * @extends SocialMediaPosting
 */
module.exports = class BlogPosting extends schema.SocialMediaPosting {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BlogPosting");
	}

}