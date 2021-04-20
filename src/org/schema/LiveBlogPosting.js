/**
 * Schema.org/LiveBlogPosting
 * A blog post intended to provide a rolling textual coverage of an ongoing event through continuous updates.
 *
 * @author schema.org
 * @class LiveBlogPosting
 * @module org.schema
 */
module.exports = class LiveBlogPosting extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LiveBlogPosting");
	}

}