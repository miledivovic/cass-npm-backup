const schema = {};
schema.MedicalEntity = require("./MedicalEntity.js");
/**
 * Schema.org/MedicalRiskFactor
 * A risk factor is anything that increases a person's likelihood of developing or contracting a disease, medical condition, or complication.
 *
 * @author schema.org
 * @class MedicalRiskFactor
 * @module org.schema
 * @extends MedicalEntity
 */
module.exports = class MedicalRiskFactor extends schema.MedicalEntity {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalRiskFactor");
	}

	/**
	 * Schema.org/increasesRiskOf
	 * The condition, complication, etc. influenced by this factor.
	 *
	 * @property increasesRiskOf
	 * @type MedicalEntity
	 */
	increasesRiskOf;

}