/**
 * Schema.org/TVClip
 * A short TV program or a segment/part of a TV program.
 *
 * @author schema.org
 * @class TVClip
 * @module org.schema
 */
module.exports = class TVClip extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TVClip");
	}

}