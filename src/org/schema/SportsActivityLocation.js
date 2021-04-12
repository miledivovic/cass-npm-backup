/**
 * Schema.org/SportsActivityLocation
 * A sports location, such as a playing field.
 *
 * @author schema.org
 * @class SportsActivityLocation
 * @module org.schema
 */
module.exports = class SportsActivityLocation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SportsActivityLocation";
	}

}