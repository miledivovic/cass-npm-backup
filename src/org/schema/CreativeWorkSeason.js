/**
 * Schema.org/CreativeWorkSeason
 * A media season e.g. tv, radio, video game etc.
 *
 * @author schema.org
 * @class CreativeWorkSeason
 * @module org.schema
 */
module.exports = class CreativeWorkSeason extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "CreativeWorkSeason";
	}

}