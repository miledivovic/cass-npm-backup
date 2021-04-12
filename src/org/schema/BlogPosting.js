/**
 * Schema.org/BlogPosting
 * A blog post.
 *
 * @author schema.org
 * @class BlogPosting
 * @module org.schema
 */
public class BlogPosting extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BlogPosting";
	}

}