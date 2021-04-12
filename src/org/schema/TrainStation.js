/**
 * Schema.org/TrainStation
 * A train station.
 *
 * @author schema.org
 * @class TrainStation
 * @module org.schema
 */
module.exports = class TrainStation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TrainStation";
	}

}