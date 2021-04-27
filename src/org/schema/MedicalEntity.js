/**
 * Schema.org/MedicalEntity
 * The most generic type of entity related to health and the practice of medicine.
 *
 * @author schema.org
 * @class MedicalEntity
 * @module org.schema
 */
module.exports = class MedicalEntity extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MedicalEntity");
	}
};
