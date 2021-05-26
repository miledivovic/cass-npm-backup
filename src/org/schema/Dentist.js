const schema = {};
schema.MedicalBusiness = require("./MedicalBusiness.js");
/**
 * Schema.org/Dentist
 * A dentist.
 *
 * @author schema.org
 * @class Dentist
 * @module org.schema
 * @extends MedicalBusiness
 */
module.exports = class Dentist extends schema.MedicalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Dentist");
	}

}