const schema = {};
schema.MedicalTherapy = require("./MedicalTherapy.js");
/**
 * Schema.org/PhysicalTherapy
 * A process of progressive physical care and rehabilitation aimed at improving a health condition.
 *
 * @author schema.org
 * @class PhysicalTherapy
 * @module org.schema
 * @extends MedicalTherapy
 */
module.exports = class PhysicalTherapy extends schema.MedicalTherapy {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PhysicalTherapy");
	}

}