const schema = {};
schema.MedicalIndication = require("./MedicalIndication.js");
/**
 * Schema.org/TreatmentIndication
 * An indication for treating an underlying condition, symptom, etc.
 *
 * @author schema.org
 * @class TreatmentIndication
 * @module org.schema
 * @extends MedicalIndication
 */
module.exports = class TreatmentIndication extends schema.MedicalIndication {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TreatmentIndication");
	}

}