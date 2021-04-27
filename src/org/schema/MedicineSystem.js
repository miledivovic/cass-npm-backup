/**
 * Schema.org/MedicineSystem
 * Systems of medical practice.
 *
 * @author schema.org
 * @class MedicineSystem
 * @module org.schema
 */
module.exports = class MedicineSystem extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MedicineSystem");
	}
};
