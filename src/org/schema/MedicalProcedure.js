const schema = {};
schema.MedicalEntity = require("./MedicalEntity.js");
/**
 * Schema.org/MedicalProcedure
 * A process of care used in either a diagnostic, therapeutic, preventive or palliative capacity that relies on invasive (surgical), non-invasive, or other techniques.
 *
 * @author schema.org
 * @class MedicalProcedure
 * @module org.schema
 * @extends MedicalEntity
 */
module.exports = class MedicalProcedure extends schema.MedicalEntity {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalProcedure");
	}

	/**
	 * Schema.org/preparation
	 * Typical preparation that a patient must undergo before having the procedure performed.
	 *
	 * @property preparation
	 * @type Text
	 */
	preparation;

	/**
	 * Schema.org/followup
	 * Typical or recommended followup care after the procedure is performed.
	 *
	 * @property followup
	 * @type Text
	 */
	followup;

	/**
	 * Schema.org/howPerformed
	 * How the procedure is performed.
	 *
	 * @property howPerformed
	 * @type Text
	 */
	howPerformed;

	/**
	 * Schema.org/status
	 * The status of the study (enumerated).
	 *
	 * @property status
	 * @type Text
	 */
	status;

	/**
	 * Schema.org/procedureType
	 * The type of procedure, for example Surgical, Noninvasive, or Percutaneous.
	 *
	 * @property procedureType
	 * @type MedicalProcedureType
	 */
	procedureType;

	/**
	 * Schema.org/bodyLocation
	 * Location in the body of the anatomical structure.
	 *
	 * @property bodyLocation
	 * @type Text
	 */
	bodyLocation;

}