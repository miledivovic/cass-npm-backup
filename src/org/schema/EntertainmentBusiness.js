/**
 * Schema.org/EntertainmentBusiness
 * A business providing entertainment.
 *
 * @author schema.org
 * @class EntertainmentBusiness
 * @module org.schema
 */
module.exports = class EntertainmentBusiness extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "EntertainmentBusiness";
	}

}