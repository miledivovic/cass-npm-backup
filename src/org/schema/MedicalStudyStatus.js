/**
 * Schema.org/MedicalStudyStatus
 * The status of a medical study. Enumerated type.
 *
 * @author schema.org
 * @class MedicalStudyStatus
 * @module org.schema
 */
module.exports = class MedicalStudyStatus extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MedicalStudyStatus");
	}
};
