/**
 * Schema.org/DrugLegalStatus
 * The legal availability status of a medical drug.
 *
 * @author schema.org
 * @class DrugLegalStatus
 * @module org.schema
 */
module.exports = class DrugLegalStatus extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DrugLegalStatus");
	}

}