/**
 * Schema.org/MedicineSystem
 * Systems of medical practice.
 *
 * @author schema.org
 * @class MedicineSystem
 * @module org.schema
 */
public class MedicineSystem extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicineSystem";
	}

}