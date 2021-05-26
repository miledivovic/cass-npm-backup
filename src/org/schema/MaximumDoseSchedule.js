const schema = {};
schema.DoseSchedule = require("./DoseSchedule.js");
/**
 * Schema.org/MaximumDoseSchedule
 * The maximum dosing schedule considered safe for a drug or supplement as recommended by an authority or by the drug/supplement's manufacturer. Capture the recommending authority in the recognizingAuthority property of MedicalEntity.
 *
 * @author schema.org
 * @class MaximumDoseSchedule
 * @module org.schema
 * @extends DoseSchedule
 */
module.exports = class MaximumDoseSchedule extends schema.DoseSchedule {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MaximumDoseSchedule");
	}

}