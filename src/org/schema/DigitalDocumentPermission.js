/**
 * Schema.org/DigitalDocumentPermission
 * A permission for a particular person or group to access a particular file.
 *
 * @author schema.org
 * @class DigitalDocumentPermission
 * @module org.schema
 */
module.exports = class DigitalDocumentPermission extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DigitalDocumentPermission");
	}

}