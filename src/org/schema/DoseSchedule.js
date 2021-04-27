/**
 * Schema.org/DoseSchedule
 * A specific dosing schedule for a drug or supplement.
 *
 * @author schema.org
 * @class DoseSchedule
 * @module org.schema
 */
module.exports = class DoseSchedule extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "DoseSchedule");
	}
};
