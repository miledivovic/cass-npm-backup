const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/DigitalDocumentPermissionType
 * A type of permission which can be granted for accessing a digital document.
 *
 * @author schema.org
 * @class DigitalDocumentPermissionType
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class DigitalDocumentPermissionType extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DigitalDocumentPermissionType");
	}

}