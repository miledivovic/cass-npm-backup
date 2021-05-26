const schema = {};
schema.EntertainmentBusiness = require("./EntertainmentBusiness.js");
/**
 * Schema.org/Casino
 * A casino.
 *
 * @author schema.org
 * @class Casino
 * @module org.schema
 * @extends EntertainmentBusiness
 */
module.exports = class Casino extends schema.EntertainmentBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Casino");
	}

}