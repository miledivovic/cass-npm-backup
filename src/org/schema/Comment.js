/**
 * Schema.org/Comment
 * A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the [[text]] property, and its topic via [[about]], properties shared with all CreativeWorks.
 *
 * @author schema.org
 * @class Comment
 * @module org.schema
 */
public class Comment extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Comment";
	}

}