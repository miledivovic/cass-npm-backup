const schema = {};
schema.FoodEstablishment = require("./FoodEstablishment.js");
/**
 * Schema.org/Distillery
 * A distillery.
 *
 * @author schema.org
 * @class Distillery
 * @module org.schema
 * @extends FoodEstablishment
 */
module.exports = class Distillery extends schema.FoodEstablishment {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Distillery");
	}

}