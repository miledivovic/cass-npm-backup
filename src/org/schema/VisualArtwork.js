/**
 * Schema.org/VisualArtwork
 * A work of art that is primarily visual in character.
 *
 * @author schema.org
 * @class VisualArtwork
 * @module org.schema
 */
module.exports = class VisualArtwork extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "VisualArtwork";
	}

}