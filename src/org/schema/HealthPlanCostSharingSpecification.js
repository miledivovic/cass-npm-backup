const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/HealthPlanCostSharingSpecification
 * A description of costs to the patient under a given network or formulary.
 *
 * @author schema.org
 * @class HealthPlanCostSharingSpecification
 * @module org.schema
 * @extends Intangible
 */
module.exports = class HealthPlanCostSharingSpecification extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HealthPlanCostSharingSpecification");
	}

	/**
	 * Schema.org/healthPlanCopay
	 * Whether The copay amount.
	 *
	 * @property healthPlanCopay
	 * @type PriceSpecification
	 */
	healthPlanCopay;

	/**
	 * Schema.org/healthPlanCopayOption
	 * Whether the copay is before or after deductible, etc. TODO: Is this a closed set?
	 *
	 * @property healthPlanCopayOption
	 * @type Text
	 */
	healthPlanCopayOption;

	/**
	 * Schema.org/healthPlanPharmacyCategory
	 * The category or type of pharmacy associated with this cost sharing.
	 *
	 * @property healthPlanPharmacyCategory
	 * @type Text
	 */
	healthPlanPharmacyCategory;

	/**
	 * Schema.org/healthPlanCoinsuranceRate
	 * Whether The rate of coinsurance expressed as a number between 0.0 and 1.0.
	 *
	 * @property healthPlanCoinsuranceRate
	 * @type Number
	 */
	healthPlanCoinsuranceRate;

	/**
	 * Schema.org/healthPlanCoinsuranceOption
	 * Whether the coinsurance applies before or after deductible, etc. TODO: Is this a closed set?
	 *
	 * @property healthPlanCoinsuranceOption
	 * @type Text
	 */
	healthPlanCoinsuranceOption;

}