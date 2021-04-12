/**
 * Schema.org/DrugLegalStatus
 * The legal availability status of a medical drug.
 *
 * @author schema.org
 * @class DrugLegalStatus
 * @module org.schema
 */
public class DrugLegalStatus extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DrugLegalStatus";
	}

}