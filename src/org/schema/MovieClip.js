const schema = {};
schema.Clip = require("./Clip.js");
/**
 * Schema.org/MovieClip
 * A short segment/part of a movie.
 *
 * @author schema.org
 * @class MovieClip
 * @module org.schema
 * @extends Clip
 */
module.exports = class MovieClip extends schema.Clip {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MovieClip");
	}

}