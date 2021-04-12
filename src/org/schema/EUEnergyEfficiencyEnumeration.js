/**
 * Schema.org/EUEnergyEfficiencyEnumeration
 * Enumerates the EU energy efficiency classes A-G as well as A+, A++, and A+++ as defined in EU directive 2017/1369.
 *
 * @author schema.org
 * @class EUEnergyEfficiencyEnumeration
 * @module org.schema
 */
module.exports = class EUEnergyEfficiencyEnumeration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "EUEnergyEfficiencyEnumeration";
	}

}