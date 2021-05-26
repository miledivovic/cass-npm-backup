const schema = {};
schema.Service = require("./Service.js");
/**
 * Schema.org/Taxi
 * A taxi.
 *
 * @author schema.org
 * @class Taxi
 * @module org.schema
 * @extends Service
 */
module.exports = class Taxi extends schema.Service {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Taxi");
	}

}