/**
 * Schema.org/DigitalDocumentPermissionType
 * A type of permission which can be granted for accessing a digital document.
 *
 * @author schema.org
 * @class DigitalDocumentPermissionType
 * @module org.schema
 */
module.exports = class DigitalDocumentPermissionType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DigitalDocumentPermissionType";
	}

}