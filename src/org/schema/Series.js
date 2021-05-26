const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Series
 * A Series in schema.org is a group of related items, typically but not necessarily of the same kind. See also [[CreativeWorkSeries]], [[EventSeries]].
 *
 * @author schema.org
 * @class Series
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Series extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Series");
	}

}