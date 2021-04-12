/**
 * Schema.org/SeaBodyOfWater
 * A sea (for example, the Caspian sea).
 *
 * @author schema.org
 * @class SeaBodyOfWater
 * @module org.schema
 */
module.exports = class SeaBodyOfWater extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SeaBodyOfWater";
	}

}