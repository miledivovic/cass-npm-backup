/**
 * Schema.org/BlogPosting
 * A blog post.
 *
 * @author schema.org
 * @class BlogPosting
 * @module org.schema
 */
module.exports = class BlogPosting extends EcRemoteLinkedData {
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