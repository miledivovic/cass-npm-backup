/**
 * Schema.org/MusicVenue
 * A music venue.
 *
 * @author schema.org
 * @class MusicVenue
 * @module org.schema
 */
module.exports = class MusicVenue extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MusicVenue");
	}

}