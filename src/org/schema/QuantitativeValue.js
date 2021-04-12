/**
 * Schema.org/QuantitativeValue
 *  A point value or interval for product characteristics and other purposes.
 *
 * @author schema.org
 * @class QuantitativeValue
 * @module org.schema
 */
public class QuantitativeValue extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "QuantitativeValue";
	}

}