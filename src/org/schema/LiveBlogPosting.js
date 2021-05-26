const schema = {};
schema.BlogPosting = require("./BlogPosting.js");
/**
 * Schema.org/LiveBlogPosting
 * A blog post intended to provide a rolling textual coverage of an ongoing event through continuous updates.
 *
 * @author schema.org
 * @class LiveBlogPosting
 * @module org.schema
 * @extends BlogPosting
 */
module.exports = class LiveBlogPosting extends schema.BlogPosting {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LiveBlogPosting");
	}

	/**
	 * Schema.org/coverageEndTime
	 * The time when the live blog will stop covering the Event. Note that coverage may continue after the Event concludes.
	 *
	 * @property coverageEndTime
	 * @type DateTime
	 */
	coverageEndTime;

	/**
	 * Schema.org/coverageStartTime
	 * The time when the live blog will begin covering the Event. Note that coverage may begin before the Event's start time. The LiveBlogPosting may also be created before coverage begins.
	 *
	 * @property coverageStartTime
	 * @type DateTime
	 */
	coverageStartTime;

	/**
	 * Schema.org/liveBlogUpdate
	 * An update to the LiveBlog.
	 *
	 * @property liveBlogUpdate
	 * @type BlogPosting
	 */
	liveBlogUpdate;

}