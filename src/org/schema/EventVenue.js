const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/EventVenue
 * An event venue.
 *
 * @author schema.org
 * @class EventVenue
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class EventVenue extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EventVenue");
	}

}