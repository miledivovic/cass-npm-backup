/**
 * Schema.org/MedicalDevice
 * Any object used in a medical capacity, such as to diagnose or treat a patient.
 *
 * @author schema.org
 * @class MedicalDevice
 * @module org.schema
 */
module.exports = class MedicalDevice extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalDevice");
	}

}