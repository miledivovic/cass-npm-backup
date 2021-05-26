const schema = {};
schema.FoodEstablishment = require("./FoodEstablishment.js");
/**
 * Schema.org/Bakery
 * A bakery.
 *
 * @author schema.org
 * @class Bakery
 * @module org.schema
 * @extends FoodEstablishment
 */
module.exports = class Bakery extends schema.FoodEstablishment {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Bakery");
	}

}