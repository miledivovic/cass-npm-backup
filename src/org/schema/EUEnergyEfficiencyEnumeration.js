const schema = {};
schema.EnergyEfficiencyEnumeration = require("./EnergyEfficiencyEnumeration.js");
/**
 * Schema.org/EUEnergyEfficiencyEnumeration
 * Enumerates the EU energy efficiency classes A-G as well as A+, A++, and A+++ as defined in EU directive 2017/1369.
 *
 * @author schema.org
 * @class EUEnergyEfficiencyEnumeration
 * @module org.schema
 * @extends EnergyEfficiencyEnumeration
 */
module.exports = class EUEnergyEfficiencyEnumeration extends schema.EnergyEfficiencyEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EUEnergyEfficiencyEnumeration");
	}

}