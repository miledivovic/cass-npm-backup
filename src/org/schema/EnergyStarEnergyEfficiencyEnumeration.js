/**
 * Schema.org/EnergyStarEnergyEfficiencyEnumeration
 * Used to indicate whether a product is EnergyStar certified.
 *
 * @author schema.org
 * @class EnergyStarEnergyEfficiencyEnumeration
 * @module org.schema
 */
module.exports = class EnergyStarEnergyEfficiencyEnumeration extends
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
			"EnergyStarEnergyEfficiencyEnumeration"
		);
	}
};
