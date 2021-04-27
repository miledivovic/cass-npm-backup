/**
 * Schema.org/Intangible
 * A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.
 *
 * @author schema.org
 * @class Intangible
 * @module org.schema
 */
module.exports = class Intangible extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Intangible");
	}
};
