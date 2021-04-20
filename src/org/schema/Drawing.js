/**
 * Schema.org/Drawing
 * A picture or diagram made with a pencil, pen, or crayon rather than paint.
 *
 * @author schema.org
 * @class Drawing
 * @module org.schema
 */
module.exports = class Drawing extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Drawing");
	}

}