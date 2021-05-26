const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/HealthPlanNetwork
 * A US-style health insurance plan network. 
 *
 * @author schema.org
 * @class HealthPlanNetwork
 * @module org.schema
 * @extends Intangible
 */
module.exports = class HealthPlanNetwork extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HealthPlanNetwork");
	}

	/**
	 * Schema.org/healthPlanNetworkTier
	 * The tier(s) for this network.
	 *
	 * @property healthPlanNetworkTier
	 * @type Text
	 */
	healthPlanNetworkTier;

	/**
	 * Schema.org/healthPlanNetworkId
	 * Name or unique ID of network. (Networks are often reused across different insurance plans).
	 *
	 * @property healthPlanNetworkId
	 * @type Text
	 */
	healthPlanNetworkId;

	/**
	 * Schema.org/healthPlanCostSharing
	 * Whether The costs to the patient for services under this network or formulary.
	 *
	 * @property healthPlanCostSharing
	 * @type Boolean
	 */
	healthPlanCostSharing;

}