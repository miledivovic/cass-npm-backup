/**
 * Schema.org/SoftwareSourceCode
 * Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.
 *
 * @author schema.org
 * @class SoftwareSourceCode
 * @module org.schema
 */
module.exports = class SoftwareSourceCode extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "SoftwareSourceCode");
	}
};
