/**
 * Schema.org/MedicalSignOrSymptom
 * Any feature associated or not with a medical condition. In medicine a symptom is generally subjective while a sign is objective.
 *
 * @author schema.org
 * @class MedicalSignOrSymptom
 * @module org.schema
 */
module.exports = class MedicalSignOrSymptom extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MedicalSignOrSymptom");
	}
};
