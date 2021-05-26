const schema = {};
schema.MedicalProcedure = require("./MedicalProcedure.js");
/**
 * Schema.org/SurgicalProcedure
 * A medical procedure involving an incision with instruments; performed for diagnose, or therapeutic purposes.
 *
 * @author schema.org
 * @class SurgicalProcedure
 * @module org.schema
 * @extends MedicalProcedure
 */
module.exports = class SurgicalProcedure extends schema.MedicalProcedure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SurgicalProcedure");
	}

}