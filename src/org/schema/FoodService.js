const schema = {};
schema.Service = require("./Service.js");
/**
 * Schema.org/FoodService
 * A food service, like breakfast, lunch, or dinner.
 *
 * @author schema.org
 * @class FoodService
 * @module org.schema
 * @extends Service
 */
module.exports = class FoodService extends schema.Service {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FoodService");
	}

}