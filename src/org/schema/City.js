const schema = {};
schema.AdministrativeArea = require("./AdministrativeArea.js");
/**
 * Schema.org/City
 * A city or town.
 *
 * @author schema.org
 * @class City
 * @module org.schema
 * @extends AdministrativeArea
 */
module.exports = class City extends schema.AdministrativeArea {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","City");
	}

}