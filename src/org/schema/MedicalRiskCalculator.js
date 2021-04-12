/**
 * Schema.org/MedicalRiskCalculator
 * A complex mathematical calculation requiring an online calculator, used to assess prognosis. Note: use the url property of Thing to record any URLs for online calculators.
 *
 * @author schema.org
 * @class MedicalRiskCalculator
 * @module org.schema
 */
module.exports = class MedicalRiskCalculator extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalRiskCalculator";
	}

}