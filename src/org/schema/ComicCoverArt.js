/**
 * Schema.org/ComicCoverArt
 * The artwork on the cover of a comic.
 *
 * @author schema.org
 * @class ComicCoverArt
 * @module org.schema
 * @extends ComicStory
 */
module.exports = class ComicCoverArt extends schema.ComicStory {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ComicCoverArt";
	}

}