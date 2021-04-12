/**
 * Schema.org/UnitPriceSpecification
 * The price asked for a given offer by the respective organization or person.
 *
 * @author schema.org
 * @class UnitPriceSpecification
 * @module org.schema
 */
module.exports = class UnitPriceSpecification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "UnitPriceSpecification";
	}

}