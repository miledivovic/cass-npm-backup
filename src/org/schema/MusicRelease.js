/**
 * Schema.org/MusicRelease
 * A MusicRelease is a specific release of a music album.
 *
 * @author schema.org
 * @class MusicRelease
 * @module org.schema
 */
module.exports = class MusicRelease extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MusicRelease");
	}
};
