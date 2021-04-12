/**
 * Schema.org/PhysicalExam
 * A type of physical examination of a patient performed by a physician. 
 *
 * @author schema.org
 * @class PhysicalExam
 * @module org.schema
 * @extends MedicalProcedure
 */
public class PhysicalExam extends schema.MedicalProcedure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PhysicalExam";
	}

}