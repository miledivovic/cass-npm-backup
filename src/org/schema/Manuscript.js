/**
 * Schema.org/Manuscript
 * A book, document, or piece of music written by hand rather than typed or printed.
 *
 * @author schema.org
 * @class Manuscript
 * @module org.schema
 */
module.exports = class Manuscript extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Manuscript");
	}
};
