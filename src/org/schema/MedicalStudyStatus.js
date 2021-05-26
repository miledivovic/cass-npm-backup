const schema = {};
schema.MedicalEnumeration = require("./MedicalEnumeration.js");
/**
 * Schema.org/MedicalStudyStatus
 * The status of a medical study. Enumerated type.
 *
 * @author schema.org
 * @class MedicalStudyStatus
 * @module org.schema
 * @extends MedicalEnumeration
 */
module.exports = class MedicalStudyStatus extends schema.MedicalEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalStudyStatus");
	}

}