/**
 * Schema.org/MedicalDevicePurpose
 * Categories of medical devices, organized by the purpose or intended use of the device.
 *
 * @author schema.org
 * @class MedicalDevicePurpose
 * @module org.schema
 */
module.exports = class MedicalDevicePurpose extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalDevicePurpose";
	}

}