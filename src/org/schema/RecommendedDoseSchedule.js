/**
 * Schema.org/RecommendedDoseSchedule
 * A recommended dosing schedule for a drug or supplement as prescribed or recommended by an authority or by the drug/supplement's manufacturer. Capture the recommending authority in the recognizingAuthority property of MedicalEntity.
 *
 * @author schema.org
 * @class RecommendedDoseSchedule
 * @module org.schema
 */
module.exports = class RecommendedDoseSchedule extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RecommendedDoseSchedule");
	}

}