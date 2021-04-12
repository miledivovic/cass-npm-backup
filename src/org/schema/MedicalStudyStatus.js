/**
 * Schema.org/MedicalStudyStatus
 * The status of a medical study. Enumerated type.
 *
 * @author schema.org
 * @class MedicalStudyStatus
 * @module org.schema
 */
public class MedicalStudyStatus extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalStudyStatus";
	}

}