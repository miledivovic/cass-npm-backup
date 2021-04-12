/**
 * Schema.org/Airline
 * An organization that provides flights for passengers.
 *
 * @author schema.org
 * @class Airline
 * @module org.schema
 */
module.exports = class Airline extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Airline";
	}

}