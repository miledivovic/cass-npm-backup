/**
 * Schema.org/DiagnosticProcedure
 * A medical procedure intended primarily for diagnostic, as opposed to therapeutic, purposes.
 *
 * @author schema.org
 * @class DiagnosticProcedure
 * @module org.schema
 */
module.exports = class DiagnosticProcedure extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DiagnosticProcedure";
	}

}