const schema = {};
schema.MedicalTherapy = require("./MedicalTherapy.js");
/**
 * Schema.org/RadiationTherapy
 * A process of care using radiation aimed at improving a health condition.
 *
 * @author schema.org
 * @class RadiationTherapy
 * @module org.schema
 * @extends MedicalTherapy
 */
module.exports = class RadiationTherapy extends schema.MedicalTherapy {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RadiationTherapy");
	}

}