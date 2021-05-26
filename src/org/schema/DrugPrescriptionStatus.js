const schema = {};
schema.MedicalEnumeration = require("./MedicalEnumeration.js");
/**
 * Schema.org/DrugPrescriptionStatus
 * Indicates whether this drug is available by prescription or over-the-counter.
 *
 * @author schema.org
 * @class DrugPrescriptionStatus
 * @module org.schema
 * @extends MedicalEnumeration
 */
module.exports = class DrugPrescriptionStatus extends schema.MedicalEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DrugPrescriptionStatus");
	}

}