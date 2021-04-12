/**
 * Schema.org/HealthPlanFormulary
 * For a given health insurance plan, the specification for costs and coverage of prescription drugs. 
 *
 * @author schema.org
 * @class HealthPlanFormulary
 * @module org.schema
 */
module.exports = class HealthPlanFormulary extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HealthPlanFormulary";
	}

}