/**
 * Schema.org/PalliativeProcedure
 * A medical procedure intended primarily for palliative purposes, aimed at relieving the symptoms of an underlying health condition.
 *
 * @author schema.org
 * @class PalliativeProcedure
 * @module org.schema
 * @extends MedicalTherapy
 */
public class PalliativeProcedure extends schema.MedicalTherapy {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PalliativeProcedure";
	}

}