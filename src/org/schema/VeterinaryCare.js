const schema = {};
schema.MedicalOrganization = require("./MedicalOrganization.js");
/**
 * Schema.org/VeterinaryCare
 * A vet's office.
 *
 * @author schema.org
 * @class VeterinaryCare
 * @module org.schema
 * @extends MedicalOrganization
 */
module.exports = class VeterinaryCare extends schema.MedicalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","VeterinaryCare");
	}

}