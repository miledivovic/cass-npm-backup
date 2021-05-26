const schema = {};
schema.MedicalRiskEstimator = require("./MedicalRiskEstimator.js");
/**
 * Schema.org/MedicalRiskCalculator
 * A complex mathematical calculation requiring an online calculator, used to assess prognosis. Note: use the url property of Thing to record any URLs for online calculators.
 *
 * @author schema.org
 * @class MedicalRiskCalculator
 * @module org.schema
 * @extends MedicalRiskEstimator
 */
module.exports = class MedicalRiskCalculator extends schema.MedicalRiskEstimator {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalRiskCalculator");
	}

}