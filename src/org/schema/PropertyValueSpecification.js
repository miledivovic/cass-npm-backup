/**
 * Schema.org/PropertyValueSpecification
 * A Property value specification.
 *
 * @author schema.org
 * @class PropertyValueSpecification
 * @module org.schema
 */
public class PropertyValueSpecification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PropertyValueSpecification";
	}

}