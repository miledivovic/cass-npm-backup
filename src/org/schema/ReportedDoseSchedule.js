/**
 * Schema.org/ReportedDoseSchedule
 * A patient-reported or observed dosing schedule for a drug or supplement.
 *
 * @author schema.org
 * @class ReportedDoseSchedule
 * @module org.schema
 */
module.exports = class ReportedDoseSchedule extends EcRemoteLinkedData {
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