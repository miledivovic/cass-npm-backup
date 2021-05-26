const schema = {};
schema.CreativeWorkSeries = require("./CreativeWorkSeries.js");
/**
 * Schema.org/Periodical
 * A publication in any medium issued in successive parts bearing numerical or chronological designations and intended, such as a magazine, scholarly journal, or newspaper to continue indefinitely.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
 *
 * @author schema.org
 * @class Periodical
 * @module org.schema
 * @extends CreativeWorkSeries
 */
module.exports = class Periodical extends schema.CreativeWorkSeries {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Periodical");
	}

}