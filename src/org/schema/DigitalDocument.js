const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/DigitalDocument
 * An electronic file or document.
 *
 * @author schema.org
 * @class DigitalDocument
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class DigitalDocument extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DigitalDocument");
	}

	/**
	 * Schema.org/hasDigitalDocumentPermission
	 * A permission related to the access to this document (e.g. permission to read or write an electronic document). For a public document, specify a grantee with an Audience with audienceType equal to "public".
	 *
	 * @property hasDigitalDocumentPermission
	 * @type DigitalDocumentPermission
	 */
	hasDigitalDocumentPermission;

}