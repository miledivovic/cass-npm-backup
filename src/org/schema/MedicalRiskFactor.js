/**
 * Schema.org/MedicalRiskFactor
 * A risk factor is anything that increases a person's likelihood of developing or contracting a disease, medical condition, or complication.
 *
 * @author schema.org
 * @class MedicalRiskFactor
 * @module org.schema
 */
module.exports = class MedicalRiskFactor extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalRiskFactor";
	}

}