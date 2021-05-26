const schema = {};
schema.MedicalEnumeration = require("./MedicalEnumeration.js");
/**
 * Schema.org/InfectiousAgentClass
 * Classes of agents or pathogens that transmit infectious diseases. Enumerated type.
 *
 * @author schema.org
 * @class InfectiousAgentClass
 * @module org.schema
 * @extends MedicalEnumeration
 */
module.exports = class InfectiousAgentClass extends schema.MedicalEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","InfectiousAgentClass");
	}

}