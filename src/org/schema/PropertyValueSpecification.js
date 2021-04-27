/**
 * Schema.org/PropertyValueSpecification
 * A Property value specification.
 *
 * @author schema.org
 * @class PropertyValueSpecification
 * @module org.schema
 */
module.exports = class PropertyValueSpecification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType(
			"http://schema.org/",
			"PropertyValueSpecification"
		);
	}
};
