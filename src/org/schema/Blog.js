const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Blog
 * A blog.
 *
 * @author schema.org
 * @class Blog
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Blog extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Blog");
	}

	/**
	 * Schema.org/issn
	 * The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.
	 *
	 * @property issn
	 * @type Text
	 */
	issn;

	/**
	 * Schema.org/blogPosts
	 * The postings that are part of this blog.
	 *
	 * @property blogPosts
	 * @type BlogPosting
	 */
	blogPosts;

	/**
	 * Schema.org/blogPost
	 * A posting that is part of this blog.
	 *
	 * @property blogPost
	 * @type BlogPosting
	 */
	blogPost;

}