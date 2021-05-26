const schema = {};
schema.EntertainmentBusiness = require("./EntertainmentBusiness.js");
/**
 * Schema.org/ComedyClub
 * A comedy club.
 *
 * @author schema.org
 * @class ComedyClub
 * @module org.schema
 * @extends EntertainmentBusiness
 */
module.exports = class ComedyClub extends schema.EntertainmentBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ComedyClub");
	}

}