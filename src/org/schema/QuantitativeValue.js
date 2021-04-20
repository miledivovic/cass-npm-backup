/**
 * Schema.org/QuantitativeValue
 *  A point value or interval for product characteristics and other purposes.
 *
 * @author schema.org
 * @class QuantitativeValue
 * @module org.schema
 */
module.exports = class QuantitativeValue extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","QuantitativeValue");
	}

}