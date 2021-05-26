const schema = {};
schema.FoodEstablishment = require("./FoodEstablishment.js");
/**
 * Schema.org/Brewery
 * Brewery.
 *
 * @author schema.org
 * @class Brewery
 * @module org.schema
 * @extends FoodEstablishment
 */
module.exports = class Brewery extends schema.FoodEstablishment {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Brewery");
	}

}