/**
 * Schema.org/Beach
 * Beach.
 *
 * @author schema.org
 * @class Beach
 * @module org.schema
 */
module.exports = class Beach extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Beach");
	}
};
