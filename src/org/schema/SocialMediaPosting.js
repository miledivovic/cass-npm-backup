/**
 * Schema.org/SocialMediaPosting
 * A post to a social media platform, including blog posts, tweets, Facebook posts, etc.
 *
 * @author schema.org
 * @class SocialMediaPosting
 * @module org.schema
 */
module.exports = class SocialMediaPosting extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SocialMediaPosting");
	}

}