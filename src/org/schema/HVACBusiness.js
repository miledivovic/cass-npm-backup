/**
 * Schema.org/HVACBusiness
 * A business that provide Heating, Ventilation and Air Conditioning services.
 *
 * @author schema.org
 * @class HVACBusiness
 * @module org.schema
 */
module.exports = class HVACBusiness extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HVACBusiness";
	}

}