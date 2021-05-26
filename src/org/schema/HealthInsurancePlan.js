const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/HealthInsurancePlan
 * A US-style health insurance plan, including PPOs, EPOs, and HMOs. 
 *
 * @author schema.org
 * @class HealthInsurancePlan
 * @module org.schema
 * @extends Intangible
 */
module.exports = class HealthInsurancePlan extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HealthInsurancePlan");
	}

	/**
	 * Schema.org/usesHealthPlanIdStandard
	 * The standard for interpreting thePlan ID. The preferred is "HIOS". See the Centers for Medicare & Medicaid Services for more details.
	 *
	 * @property usesHealthPlanIdStandard
	 * @type Text
	 */
	usesHealthPlanIdStandard;

	/**
	 * Schema.org/contactPoint
	 * A contact point for a person or organization.
	 *
	 * @property contactPoint
	 * @type ContactPoint
	 */
	contactPoint;

	/**
	 * Schema.org/healthPlanDrugTier
	 * The tier(s) of drugs offered by this formulary or insurance plan.
	 *
	 * @property healthPlanDrugTier
	 * @type Text
	 */
	healthPlanDrugTier;

	/**
	 * Schema.org/includesHealthPlanNetwork
	 * Networks covered by this plan.
	 *
	 * @property includesHealthPlanNetwork
	 * @type HealthPlanNetwork
	 */
	includesHealthPlanNetwork;

	/**
	 * Schema.org/healthPlanMarketingUrl
	 * The URL that goes directly to the plan brochure for the specific standard plan or plan variation.
	 *
	 * @property healthPlanMarketingUrl
	 * @type URL
	 */
	healthPlanMarketingUrl;

	/**
	 * Schema.org/includesHealthPlanFormulary
	 * Formularies covered by this plan.
	 *
	 * @property includesHealthPlanFormulary
	 * @type HealthPlanFormulary
	 */
	includesHealthPlanFormulary;

	/**
	 * Schema.org/benefitsSummaryUrl
	 * The URL that goes directly to the summary of benefits and coverage for the specific standard plan or plan variation.
	 *
	 * @property benefitsSummaryUrl
	 * @type URL
	 */
	benefitsSummaryUrl;

	/**
	 * Schema.org/healthPlanId
	 * The 14-character, HIOS-generated Plan ID number. (Plan IDs must be unique, even across different markets.)
	 *
	 * @property healthPlanId
	 * @type Text
	 */
	healthPlanId;

	/**
	 * Schema.org/healthPlanDrugOption
	 * TODO.
	 *
	 * @property healthPlanDrugOption
	 * @type Text
	 */
	healthPlanDrugOption;

}