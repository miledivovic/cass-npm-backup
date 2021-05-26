const schema = {};
schema.MedicalEntity = require("./MedicalEntity.js");
/**
 * Schema.org/DrugClass
 * A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of action, common physiological effects, etc.
 *
 * @author schema.org
 * @class DrugClass
 * @module org.schema
 * @extends MedicalEntity
 */
module.exports = class DrugClass extends schema.MedicalEntity {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DrugClass");
	}

	/**
	 * Schema.org/drug
	 * Specifying a drug or medicine used in a medication procedure.
	 *
	 * @property drug
	 * @type Drug
	 */
	drug;

}