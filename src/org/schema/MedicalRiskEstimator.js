/**
 * Schema.org/MedicalRiskEstimator
 * Any rule set or interactive tool for estimating the risk of developing a complication or condition.
 *
 * @author schema.org
 * @class MedicalRiskEstimator
 * @module org.schema
 */
module.exports = class MedicalRiskEstimator extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalRiskEstimator");
	}

}