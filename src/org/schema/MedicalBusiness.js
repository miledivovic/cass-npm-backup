const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/MedicalBusiness
 * A particular physical or virtual business of an organization for medical purposes. Examples of MedicalBusiness include differents business run by health professionals.
 *
 * @author schema.org
 * @class MedicalBusiness
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class MedicalBusiness extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalBusiness");
	}

}