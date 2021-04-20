global.schema.MedicalOrganization = require("./MedicalOrganization.js");
/**
 * Schema.org/Hospital
 * A hospital.
 *
 * @author schema.org
 * @class Hospital
 * @module org.schema
 * @extends MedicalOrganization
 */
module.exports = class Hospital extends schema.MedicalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Hospital");
	}

}