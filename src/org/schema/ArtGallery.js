/**
 * Schema.org/ArtGallery
 * An art gallery.
 *
 * @author schema.org
 * @class ArtGallery
 * @module org.schema
 */
public class ArtGallery extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ArtGallery";
	}

}