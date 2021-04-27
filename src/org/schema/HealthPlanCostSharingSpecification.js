/**
 * Schema.org/HealthPlanCostSharingSpecification
 * A description of costs to the patient under a given network or formulary.
 *
 * @author schema.org
 * @class HealthPlanCostSharingSpecification
 * @module org.schema
 */
module.exports = class HealthPlanCostSharingSpecification extends
	EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType(
			"http://schema.org/",
			"HealthPlanCostSharingSpecification"
		);
	}
};
