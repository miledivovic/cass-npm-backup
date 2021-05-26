const schema = {};
schema.AdministrativeArea = require("./AdministrativeArea.js");
/**
 * Schema.org/Country
 * A country.
 *
 * @author schema.org
 * @class Country
 * @module org.schema
 * @extends AdministrativeArea
 */
module.exports = class Country extends schema.AdministrativeArea {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Country");
	}

}