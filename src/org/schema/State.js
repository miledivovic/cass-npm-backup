const schema = {};
schema.AdministrativeArea = require("./AdministrativeArea.js");
/**
 * Schema.org/State
 * A state or province of a country.
 *
 * @author schema.org
 * @class State
 * @module org.schema
 * @extends AdministrativeArea
 */
module.exports = class State extends schema.AdministrativeArea {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","State");
	}

}