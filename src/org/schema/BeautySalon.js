/**
 * Schema.org/BeautySalon
 * Beauty salon.
 *
 * @author schema.org
 * @class BeautySalon
 * @module org.schema
 */
module.exports = class BeautySalon extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BeautySalon";
	}

}