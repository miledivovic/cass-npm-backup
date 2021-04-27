/**
 * Schema.org/StructuredValue
 * Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing.
 *
 * @author schema.org
 * @class StructuredValue
 * @module org.schema
 */
module.exports = class StructuredValue extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "StructuredValue");
	}
};
