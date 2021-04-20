/**
 * Schema.org/TreatmentIndication
 * An indication for treating an underlying condition, symptom, etc.
 *
 * @author schema.org
 * @class TreatmentIndication
 * @module org.schema
 */
module.exports = class TreatmentIndication extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TreatmentIndication");
	}

}