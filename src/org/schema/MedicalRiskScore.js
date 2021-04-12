/**
 * Schema.org/MedicalRiskScore
 * A simple system that adds up the number of risk factors to yield a score that is associated with prognosis, e.g. CHAD score, TIMI risk score.
 *
 * @author schema.org
 * @class MedicalRiskScore
 * @module org.schema
 */
module.exports = class MedicalRiskScore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalRiskScore";
	}

}