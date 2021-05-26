const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/PublicationVolume
 * A part of a successively published publication such as a periodical or multi-volume work, often numbered. It may represent a time span, such as a year.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
 *
 * @author schema.org
 * @class PublicationVolume
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class PublicationVolume extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PublicationVolume");
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
	 * Schema.org/volumeNumber
	 * Identifies the volume of publication or multi-part work; for example, "iii" or "2".
	 *
	 * @property volumeNumber
	 * @type Text
	 */
	volumeNumber;

	/**
	 * Schema.org/pageEnd
	 * The page on which the work ends; for example "138" or "xvi".
	 *
	 * @property pageEnd
	 * @type Text
	 */
	pageEnd;

}