const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/PublicationIssue
 * A part of a successively published publication such as a periodical or publication volume, often numbered, usually containing a grouping of works such as articles.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
 *
 * @author schema.org
 * @class PublicationIssue
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class PublicationIssue extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PublicationIssue");
	}

	/**
	 * Schema.org/pagination
	 * Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49".
	 *
	 * @property pagination
	 * @type Text
	 */
	pagination;

	/**
	 * Schema.org/pageStart
	 * The page on which the work starts; for example "135" or "xiii".
	 *
	 * @property pageStart
	 * @type Integer
	 */
	pageStart;

	/**
	 * Schema.org/issueNumber
	 * Identifies the issue of publication; for example, "iii" or "2".
	 *
	 * @property issueNumber
	 * @type Integer
	 */
	issueNumber;

	/**
	 * Schema.org/pageEnd
	 * The page on which the work ends; for example "138" or "xvi".
	 *
	 * @property pageEnd
	 * @type Text
	 */
	pageEnd;

}