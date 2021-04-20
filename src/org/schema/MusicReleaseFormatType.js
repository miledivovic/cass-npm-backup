/**
 * Schema.org/MusicReleaseFormatType
 * Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
 *
 * @author schema.org
 * @class MusicReleaseFormatType
 * @module org.schema
 */
module.exports = class MusicReleaseFormatType extends EcRemoteLinkedData {
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