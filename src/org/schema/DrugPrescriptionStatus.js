/**
 * Schema.org/DrugPrescriptionStatus
 * Indicates whether this drug is available by prescription or over-the-counter.
 *
 * @author schema.org
 * @class DrugPrescriptionStatus
 * @module org.schema
 */
module.exports = class DrugPrescriptionStatus extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DrugPrescriptionStatus");
	}

}