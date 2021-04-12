/**
 * Schema.org/IndividualProduct
 * A single, identifiable product instance (e.g. a laptop with a particular serial number).
 *
 * @author schema.org
 * @class IndividualProduct
 * @module org.schema
 */
public class IndividualProduct extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "IndividualProduct";
	}

}