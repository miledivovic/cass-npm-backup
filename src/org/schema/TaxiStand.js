/**
 * Schema.org/TaxiStand
 * A taxi stand.
 *
 * @author schema.org
 * @class TaxiStand
 * @module org.schema
 */
module.exports = class TaxiStand extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TaxiStand";
	}

}