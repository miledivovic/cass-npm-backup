const schema = {};
schema.FoodEstablishment = require("./FoodEstablishment.js");
/**
 * Schema.org/BarOrPub
 * A bar or pub.
 *
 * @author schema.org
 * @class BarOrPub
 * @module org.schema
 * @extends FoodEstablishment
 */
module.exports = class BarOrPub extends schema.FoodEstablishment {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BarOrPub");
	}

}