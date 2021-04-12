/**
 * Schema.org/MedicalOrganization
 * A medical organization (physical or not), such as hospital, institution or clinic.
 *
 * @author schema.org
 * @class MedicalOrganization
 * @module org.schema
 */
public class MedicalOrganization extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalOrganization";
	}

}