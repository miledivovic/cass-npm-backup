const schema = {};
schema.MedicalTherapy = require("./MedicalTherapy.js");
/**
 * Schema.org/PalliativeProcedure
 * A medical procedure intended primarily for palliative purposes, aimed at relieving the symptoms of an underlying health condition.
 *
 * @author schema.org
 * @class PalliativeProcedure
 * @module org.schema
 * @extends MedicalTherapy
 */
module.exports = class PalliativeProcedure extends schema.MedicalTherapy {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PalliativeProcedure");
	}

}