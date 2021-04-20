global.schema.MedicalOrganization = require("./MedicalOrganization.js");
/**
 * Schema.org/MedicalClinic
 * A facility, often associated with a hospital or medical school, that is devoted to the specific diagnosis and/or healthcare. Previously limited to outpatients but with evolution it may be open to inpatients as well.
 *
 * @author schema.org
 * @class MedicalClinic
 * @module org.schema
 * @extends MedicalOrganization
 */
module.exports = class MedicalClinic extends schema.MedicalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalClinic");
	}

}