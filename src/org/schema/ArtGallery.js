/**
 * Schema.org/ArtGallery
 * An art gallery.
 *
 * @author schema.org
 * @class ArtGallery
 * @module org.schema
 */
module.exports = class ArtGallery extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ArtGallery");
	}
};
