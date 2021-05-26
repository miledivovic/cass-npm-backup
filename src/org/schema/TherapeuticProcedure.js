const schema = {};
schema.MedicalProcedure = require("./MedicalProcedure.js");
/**
 * Schema.org/TherapeuticProcedure
 * A medical procedure intended primarily for therapeutic purposes, aimed at improving a health condition.
 *
 * @author schema.org
 * @class TherapeuticProcedure
 * @module org.schema
 * @extends MedicalProcedure
 */
module.exports = class TherapeuticProcedure extends schema.MedicalProcedure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TherapeuticProcedure");
	}

	/**
	 * Schema.org/drug
	 * Specifying a drug or medicine used in a medication procedure.
	 *
	 * @property drug
	 * @type Drug
	 */
	drug;

	/**
	 * Schema.org/adverseOutcome
	 * A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead.
	 *
	 * @property adverseOutcome
	 * @type MedicalEntity
	 */
	adverseOutcome;

	/**
	 * Schema.org/doseSchedule
	 * A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.
	 *
	 * @property doseSchedule
	 * @type DoseSchedule
	 */
	doseSchedule;

}