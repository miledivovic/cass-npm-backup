/**
 * Schema.org/DiagnosticLab
 * A medical laboratory that offers on-site or off-site diagnostic services.
 *
 * @author schema.org
 * @class DiagnosticLab
 * @module org.schema
 */
module.exports = class DiagnosticLab extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "DiagnosticLab");
	}
};
