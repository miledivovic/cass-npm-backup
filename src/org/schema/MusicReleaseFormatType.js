const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/MusicReleaseFormatType
 * Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
 *
 * @author schema.org
 * @class MusicReleaseFormatType
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class MusicReleaseFormatType extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MusicReleaseFormatType");
	}

}