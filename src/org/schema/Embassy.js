/**
 * Schema.org/Embassy
 * An embassy.
 *
 * @author schema.org
 * @class Embassy
 * @module org.schema
 */
module.exports = class Embassy extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Embassy");
	}

}