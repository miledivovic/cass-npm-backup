/**
 * Schema.org/Pond
 * A pond.
 *
 * @author schema.org
 * @class Pond
 * @module org.schema
 */
module.exports = class Pond extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Pond");
	}
};
