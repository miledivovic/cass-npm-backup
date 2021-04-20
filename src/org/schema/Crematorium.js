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
		super();
		this.setContextAndType("http://schema.org/","Crematorium");
	}

}