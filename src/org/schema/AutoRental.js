/**
 * Schema.org/AutoRental
 * A car rental business.
 *
 * @author schema.org
 * @class AutoRental
 * @module org.schema
 */
module.exports = class AutoRental extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AutoRental";
	}

}