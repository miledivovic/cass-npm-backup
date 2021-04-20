/**
 * Schema.org/MedicalAudienceType
 * Target audiences types for medical web pages. Enumerated type.
 *
 * @author schema.org
 * @class MedicalAudienceType
 * @module org.schema
 */
module.exports = class MedicalAudienceType extends EcRemoteLinkedData {
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