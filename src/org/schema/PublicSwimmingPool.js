const schema = {};
schema.SportsActivityLocation = require("./SportsActivityLocation.js");
/**
 * Schema.org/PublicSwimmingPool
 * A public swimming pool.
 *
 * @author schema.org
 * @class PublicSwimmingPool
 * @module org.schema
 * @extends SportsActivityLocation
 */
module.exports = class PublicSwimmingPool extends schema.SportsActivityLocation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PublicSwimmingPool");
	}

}