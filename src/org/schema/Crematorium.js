/**
 * Schema.org/Crematorium
 * A crematorium.
 *
 * @author schema.org
 * @class Crematorium
 * @module org.schema
 */
module.exports = class Crematorium extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Crematorium";
	}

}