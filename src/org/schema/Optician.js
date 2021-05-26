const schema = {};
schema.MedicalBusiness = require("./MedicalBusiness.js");
/**
 * Schema.org/Optician
 * A store that sells reading glasses and similar devices for improving vision.
 *
 * @author schema.org
 * @class Optician
 * @module org.schema
 * @extends MedicalBusiness
 */
module.exports = class Optician extends schema.MedicalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Optician");
	}

}