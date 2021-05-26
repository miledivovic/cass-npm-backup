const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/EnergyEfficiencyEnumeration
 * Enumerates energy efficiency levels (also known as "classes" or "ratings") and certifications that are part of several international energy efficiency standards.
 *
 * @author schema.org
 * @class EnergyEfficiencyEnumeration
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class EnergyEfficiencyEnumeration extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EnergyEfficiencyEnumeration");
	}

}