/**
 * Schema.org/Clip
 * A short TV or radio program or a segment/part of a program.
 *
 * @author schema.org
 * @class Clip
 * @module org.schema
 */
module.exports = class Clip extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Clip";
	}

}