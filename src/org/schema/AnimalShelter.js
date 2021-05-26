const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/AnimalShelter
 * Animal shelter.
 *
 * @author schema.org
 * @class AnimalShelter
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class AnimalShelter extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AnimalShelter");
	}

}