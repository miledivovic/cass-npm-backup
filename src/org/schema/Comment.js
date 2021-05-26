const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Comment
 * A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the [[text]] property, and its topic via [[about]], properties shared with all CreativeWorks.
 *
 * @author schema.org
 * @class Comment
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Comment extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Comment");
	}

	/**
	 * Schema.org/parentItem
	 * The parent of a question, answer or item in general.
	 *
	 * @property parentItem
	 * @type Comment
	 */
	parentItem;

	/**
	 * Schema.org/downvoteCount
	 * The number of downvotes this question, answer or comment has received from the community.
	 *
	 * @property downvoteCount
	 * @type Integer
	 */
	downvoteCount;

	/**
	 * Schema.org/upvoteCount
	 * The number of upvotes this question, answer or comment has received from the community.
	 *
	 * @property upvoteCount
	 * @type Integer
	 */
	upvoteCount;

}