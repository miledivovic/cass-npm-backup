const schema = {};
schema.VisualArtwork = require("./VisualArtwork.js");
/**
 * Schema.org/CoverArt
 * The artwork on the outer surface of a CreativeWork.
 *
 * @author schema.org
 * @class CoverArt
 * @module org.schema
 * @extends VisualArtwork
 */
module.exports = class CoverArt extends schema.VisualArtwork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CoverArt");
	}

}