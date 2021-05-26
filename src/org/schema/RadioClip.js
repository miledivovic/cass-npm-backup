const schema = {};
schema.Clip = require("./Clip.js");
/**
 * Schema.org/RadioClip
 * A short radio program or a segment/part of a radio program.
 *
 * @author schema.org
 * @class RadioClip
 * @module org.schema
 * @extends Clip
 */
module.exports = class RadioClip extends schema.Clip {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RadioClip");
	}

}