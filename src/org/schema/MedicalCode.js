/**
 * Schema.org/MedicalCode
 * A code for a medical entity.
 *
 * @author schema.org
 * @class MedicalCode
 * @module org.schema
 * @extends CategoryCode
 */
public class MedicalCode extends schema.CategoryCode {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalCode";
	}

}