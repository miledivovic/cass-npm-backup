const schema = {};
schema.MedicalRiskEstimator = require("./MedicalRiskEstimator.js");
/**
 * Schema.org/MedicalRiskScore
 * A simple system that adds up the number of risk factors to yield a score that is associated with prognosis, e.g. CHAD score, TIMI risk score.
 *
 * @author schema.org
 * @class MedicalRiskScore
 * @module org.schema
 * @extends MedicalRiskEstimator
 */
module.exports = class MedicalRiskScore extends schema.MedicalRiskEstimator {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalRiskScore");
	}

	/**
	 * Schema.org/algorithm
	 * The algorithm or rules to follow to compute the score.
	 *
	 * @property algorithm
	 * @type Text
	 */
	algorithm;

}