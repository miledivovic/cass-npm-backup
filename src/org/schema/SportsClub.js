const schema = {};
schema.SportsActivityLocation = require("./SportsActivityLocation.js");
/**
 * Schema.org/SportsClub
 * A sports club.
 *
 * @author schema.org
 * @class SportsClub
 * @module org.schema
 * @extends SportsActivityLocation
 */
module.exports = class SportsClub extends schema.SportsActivityLocation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SportsClub");
	}

}