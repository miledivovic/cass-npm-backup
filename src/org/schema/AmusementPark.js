const schema = {};
schema.EntertainmentBusiness = require("./EntertainmentBusiness.js");
/**
 * Schema.org/AmusementPark
 * An amusement park.
 *
 * @author schema.org
 * @class AmusementPark
 * @module org.schema
 * @extends EntertainmentBusiness
 */
module.exports = class AmusementPark extends schema.EntertainmentBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AmusementPark");
	}

}