/**
 * Schema.org/SportsClub
 * A sports club.
 *
 * @author schema.org
 * @class SportsClub
 * @module org.schema
 */
module.exports = class SportsClub extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SportsClub";
	}

}