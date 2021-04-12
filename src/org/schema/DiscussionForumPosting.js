/**
 * Schema.org/DiscussionForumPosting
 * A posting to a discussion forum.
 *
 * @author schema.org
 * @class DiscussionForumPosting
 * @module org.schema
 */
public class DiscussionForumPosting extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DiscussionForumPosting";
	}

}