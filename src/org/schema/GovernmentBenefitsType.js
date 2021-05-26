const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/GovernmentBenefitsType
 * GovernmentBenefitsType enumerates several kinds of government benefits to support the COVID-19 situation. Note that this structure may not capture all benefits offered.
 *
 * @author schema.org
 * @class GovernmentBenefitsType
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class GovernmentBenefitsType extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GovernmentBenefitsType");
	}

}