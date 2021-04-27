/**
 * Schema.org/MedicalTestPanel
 * Any collection of tests commonly ordered together.
 *
 * @author schema.org
 * @class MedicalTestPanel
 * @module org.schema
 */
module.exports = class MedicalTestPanel extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MedicalTestPanel");
	}
};
