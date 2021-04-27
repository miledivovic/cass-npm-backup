/**
 * Schema.org/SomeProducts
 * A placeholder for multiple similar products of the same kind.
 *
 * @author schema.org
 * @class SomeProducts
 * @module org.schema
 */
module.exports = class SomeProducts extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "SomeProducts");
	}
};
