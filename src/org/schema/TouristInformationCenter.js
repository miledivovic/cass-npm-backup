/**
 * Schema.org/TouristInformationCenter
 * A tourist information center.
 *
 * @author schema.org
 * @class TouristInformationCenter
 * @module org.schema
 */
module.exports = class TouristInformationCenter extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TouristInformationCenter";
	}

}