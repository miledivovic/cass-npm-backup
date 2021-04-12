/**
 * Schema.org/MaximumDoseSchedule
 * The maximum dosing schedule considered safe for a drug or supplement as recommended by an authority or by the drug/supplement's manufacturer. Capture the recommending authority in the recognizingAuthority property of MedicalEntity.
 *
 * @author schema.org
 * @class MaximumDoseSchedule
 * @module org.schema
 */
public class MaximumDoseSchedule extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MaximumDoseSchedule";
	}

}