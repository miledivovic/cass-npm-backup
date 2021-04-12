/**
 * Schema.org/LandmarksOrHistoricalBuildings
 * An historical landmark or building.
 *
 * @author schema.org
 * @class LandmarksOrHistoricalBuildings
 * @module org.schema
 */
module.exports = class LandmarksOrHistoricalBuildings extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "LandmarksOrHistoricalBuildings";
	}

}