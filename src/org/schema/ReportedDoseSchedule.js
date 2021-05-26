const schema = {};
schema.DoseSchedule = require("./DoseSchedule.js");
/**
 * Schema.org/ReportedDoseSchedule
 * A patient-reported or observed dosing schedule for a drug or supplement.
 *
 * @author schema.org
 * @class ReportedDoseSchedule
 * @module org.schema
 * @extends DoseSchedule
 */
module.exports = class ReportedDoseSchedule extends schema.DoseSchedule {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ReportedDoseSchedule");
	}

}