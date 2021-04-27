global.schema.PeopleAudience = require("./PeopleAudience.js");
/**
 * Schema.org/MedicalAudience
 * Target audiences for medical web pages.
 *
 * @author schema.org
 * @class MedicalAudience
 * @module org.schema
 * @extends PeopleAudience
 */
module.exports = class MedicalAudience extends schema.PeopleAudience {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MedicalAudience");
	}
};
