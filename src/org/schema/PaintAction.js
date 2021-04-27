/**
 * Schema.org/PaintAction
 * The act of producing a painting, typically with paint and canvas as instruments.
 *
 * @author schema.org
 * @class PaintAction
 * @module org.schema
 */
module.exports = class PaintAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "PaintAction");
	}
};
