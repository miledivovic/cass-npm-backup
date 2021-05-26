const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/HealthPlanFormulary
 * For a given health insurance plan, the specification for costs and coverage of prescription drugs. 
 *
 * @author schema.org
 * @class HealthPlanFormulary
 * @module org.schema
 * @extends Intangible
 */
module.exports = class HealthPlanFormulary extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HealthPlanFormulary");
	}

	/**
	 * Schema.org/healthPlanDrugTier
	 * The tier(s) of drugs offered by this formulary or insurance plan.
	 *
	 * @property healthPlanDrugTier
	 * @type Text
	 */
	healthPlanDrugTier;

	/**
	 * Schema.org/healthPlanCostSharing
	 * Whether The costs to the patient for services under this network or formulary.
	 *
	 * @property healthPlanCostSharing
	 * @type Boolean
	 */
	healthPlanCostSharing;

	/**
	 * Schema.org/offersPrescriptionByMail
	 * Whether prescriptions can be delivered by mail.
	 *
	 * @property offersPrescriptionByMail
	 * @type Boolean
	 */
	offersPrescriptionByMail;

}