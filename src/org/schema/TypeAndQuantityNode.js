/**
 * Schema.org/TypeAndQuantityNode
 * A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.
 *
 * @author schema.org
 * @class TypeAndQuantityNode
 * @module org.schema
 */
module.exports = class TypeAndQuantityNode extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TypeAndQuantityNode";
	}

}