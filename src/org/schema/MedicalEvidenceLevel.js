/**
 * Schema.org/MedicalEvidenceLevel
 * Level of evidence for a medical guideline. Enumerated type.
 *
 * @author schema.org
 * @class MedicalEvidenceLevel
 * @module org.schema
 */
module.exports = class MedicalEvidenceLevel extends EcRemoteLinkedData {
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