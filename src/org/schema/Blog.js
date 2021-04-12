/**
 * Schema.org/Blog
 * A blog.
 *
 * @author schema.org
 * @class Blog
 * @module org.schema
 */
module.exports = class Blog extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Blog";
	}

}