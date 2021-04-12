/**
 * Schema.org/RadioStation
 * A radio station.
 *
 * @author schema.org
 * @class RadioStation
 * @module org.schema
 */
module.exports = class RadioStation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "RadioStation";
	}

}