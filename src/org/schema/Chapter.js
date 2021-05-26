const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Chapter
 * One of the sections into which a book is divided. A chapter usually has a section number or a name.
 *
 * @author schema.org
 * @class Chapter
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Chapter extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Chapter");
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
	 * Schema.org/pageEnd
	 * The page on which the work ends; for example "138" or "xvi".
	 *
	 * @property pageEnd
	 * @type Text
	 */
	pageEnd;

}