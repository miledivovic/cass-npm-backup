/**
 * Schema.org/LiveBlogPosting
 * A blog post intended to provide a rolling textual coverage of an ongoing event through continuous updates.
 *
 * @author schema.org
 * @class LiveBlogPosting
 * @module org.schema
 */
public class LiveBlogPosting extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "LiveBlogPosting";
	}

}