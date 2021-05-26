const schema = {};
schema.MedicalEnumeration = require("./MedicalEnumeration.js");
/**
 * Schema.org/MedicalAudienceType
 * Target audiences types for medical web pages. Enumerated type.
 *
 * @author schema.org
 * @class MedicalAudienceType
 * @module org.schema
 * @extends MedicalEnumeration
 */
module.exports = class MedicalAudienceType extends schema.MedicalEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalAudienceType");
	}

}