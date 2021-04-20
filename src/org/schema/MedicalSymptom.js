/**
 * Schema.org/MedicalSymptom
 * Any complaint sensed and expressed by the patient (therefore defined as subjective)  like stomachache, lower-back pain, or fatigue.
 *
 * @author schema.org
 * @class MedicalSymptom
 * @module org.schema
 */
module.exports = class MedicalSymptom extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalSymptom");
	}

}