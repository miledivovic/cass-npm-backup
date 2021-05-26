const schema = {};
schema.MedicalSign = require("./MedicalSign.js");
/**
 * Schema.org/VitalSign
 * Vital signs are measures of various physiological functions in order to assess the most basic body functions.
 *
 * @author schema.org
 * @class VitalSign
 * @module org.schema
 * @extends MedicalSign
 */
module.exports = class VitalSign extends schema.MedicalSign {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","VitalSign");
	}

}