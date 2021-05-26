const schema = {};
schema.MedicalEnumeration = require("./MedicalEnumeration.js");
/**
 * Schema.org/MedicalEvidenceLevel
 * Level of evidence for a medical guideline. Enumerated type.
 *
 * @author schema.org
 * @class MedicalEvidenceLevel
 * @module org.schema
 * @extends MedicalEnumeration
 */
module.exports = class MedicalEvidenceLevel extends schema.MedicalEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalEvidenceLevel");
	}

}