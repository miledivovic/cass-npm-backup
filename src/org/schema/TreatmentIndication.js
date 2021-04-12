/**
 * Schema.org/TreatmentIndication
 * An indication for treating an underlying condition, symptom, etc.
 *
 * @author schema.org
 * @class TreatmentIndication
 * @module org.schema
 */
public class TreatmentIndication extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TreatmentIndication";
	}

}