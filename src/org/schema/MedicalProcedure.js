/**
 * Schema.org/MedicalProcedure
 * A process of care used in either a diagnostic, therapeutic, preventive or palliative capacity that relies on invasive (surgical), non-invasive, or other techniques.
 *
 * @author schema.org
 * @class MedicalProcedure
 * @module org.schema
 */
module.exports = class MedicalProcedure extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MedicalProcedure");
	}
};
