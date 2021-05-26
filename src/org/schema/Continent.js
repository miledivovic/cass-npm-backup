const schema = {};
schema.Landform = require("./Landform.js");
/**
 * Schema.org/Continent
 * One of the continents (for example, Europe or Africa).
 *
 * @author schema.org
 * @class Continent
 * @module org.schema
 * @extends Landform
 */
module.exports = class Continent extends schema.Landform {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Continent");
	}

}