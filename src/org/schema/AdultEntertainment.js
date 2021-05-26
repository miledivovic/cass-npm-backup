const schema = {};
schema.EntertainmentBusiness = require("./EntertainmentBusiness.js");
/**
 * Schema.org/AdultEntertainment
 * An adult entertainment establishment.
 *
 * @author schema.org
 * @class AdultEntertainment
 * @module org.schema
 * @extends EntertainmentBusiness
 */
module.exports = class AdultEntertainment extends schema.EntertainmentBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AdultEntertainment");
	}

}