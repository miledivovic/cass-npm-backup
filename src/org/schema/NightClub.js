const schema = {};
schema.EntertainmentBusiness = require("./EntertainmentBusiness.js");
/**
 * Schema.org/NightClub
 * A nightclub or discotheque.
 *
 * @author schema.org
 * @class NightClub
 * @module org.schema
 * @extends EntertainmentBusiness
 */
module.exports = class NightClub extends schema.EntertainmentBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","NightClub");
	}

}