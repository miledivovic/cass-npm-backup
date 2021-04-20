/**
 * Schema.org/Library
 * A library.
 *
 * @author schema.org
 * @class Library
 * @module org.schema
 */
module.exports = class Library extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Library");
	}

}