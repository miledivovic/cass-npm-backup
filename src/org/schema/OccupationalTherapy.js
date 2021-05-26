const schema = {};
schema.MedicalTherapy = require("./MedicalTherapy.js");
/**
 * Schema.org/OccupationalTherapy
 * A treatment of people with physical, emotional, or social problems, using purposeful activity to help them overcome or learn to deal with their problems.
 *
 * @author schema.org
 * @class OccupationalTherapy
 * @module org.schema
 * @extends MedicalTherapy
 */
module.exports = class OccupationalTherapy extends schema.MedicalTherapy {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OccupationalTherapy");
	}

}