/**
 * Schema.org/SocialMediaPosting
 * A post to a social media platform, including blog posts, tweets, Facebook posts, etc.
 *
 * @author schema.org
 * @class SocialMediaPosting
 * @module org.schema
 */
public class SocialMediaPosting extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SocialMediaPosting";
	}

}