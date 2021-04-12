/**
 * Schema.org/MedicalEvidenceLevel
 * Level of evidence for a medical guideline. Enumerated type.
 *
 * @author schema.org
 * @class MedicalEvidenceLevel
 * @module org.schema
 */
public class MedicalEvidenceLevel extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalEvidenceLevel";
	}

}