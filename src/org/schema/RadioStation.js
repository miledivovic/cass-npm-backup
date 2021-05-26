const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/RadioStation
 * A radio station.
 *
 * @author schema.org
 * @class RadioStation
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class RadioStation extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RadioStation");
	}

}