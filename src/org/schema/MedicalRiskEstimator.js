/**
 * Schema.org/MedicalRiskEstimator
 * Any rule set or interactive tool for estimating the risk of developing a complication or condition.
 *
 * @author schema.org
 * @class MedicalRiskEstimator
 * @module org.schema
 */
public class MedicalRiskEstimator extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalRiskEstimator";
	}

}