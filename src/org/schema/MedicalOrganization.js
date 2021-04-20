/**
 * Schema.org/MedicalOrganization
 * A medical organization (physical or not), such as hospital, institution or clinic.
 *
 * @author schema.org
 * @class MedicalOrganization
 * @module org.schema
 */
module.exports = class MedicalOrganization extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalOrganization");
	}

}