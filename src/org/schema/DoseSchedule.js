const schema = {};
schema.MedicalIntangible = require("./MedicalIntangible.js");
/**
 * Schema.org/DoseSchedule
 * A specific dosing schedule for a drug or supplement.
 *
 * @author schema.org
 * @class DoseSchedule
 * @module org.schema
 * @extends MedicalIntangible
 */
module.exports = class DoseSchedule extends schema.MedicalIntangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DoseSchedule");
	}

	/**
	 * Schema.org/frequency
	 * How often the dose is taken, e.g. 'daily'.
	 *
	 * @property frequency
	 * @type Text
	 */
	frequency;

	/**
	 * Schema.org/doseValue
	 * The value of the dose, e.g. 500.
	 *
	 * @property doseValue
	 * @type Number
	 */
	doseValue;

	/**
	 * Schema.org/doseUnit
	 * The unit of the dose, e.g. 'mg'.
	 *
	 * @property doseUnit
	 * @type Text
	 */
	doseUnit;

	/**
	 * Schema.org/targetPopulation
	 * Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'.
	 *
	 * @property targetPopulation
	 * @type Text
	 */
	targetPopulation;

}