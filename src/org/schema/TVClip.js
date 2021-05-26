const schema = {};
schema.Clip = require("./Clip.js");
/**
 * Schema.org/TVClip
 * A short TV program or a segment/part of a TV program.
 *
 * @author schema.org
 * @class TVClip
 * @module org.schema
 * @extends Clip
 */
module.exports = class TVClip extends schema.Clip {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TVClip");
	}

	/**
	 * Schema.org/partOfTVSeries
	 * The TV series to which this episode or season belongs.
	 *
	 * @property partOfTVSeries
	 * @type TVSeries
	 */
	partOfTVSeries;

}