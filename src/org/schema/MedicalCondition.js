/**
 * Schema.org/MedicalCondition
 * Any condition of the human body that affects the normal functioning of a person, whether physically or mentally. Includes diseases, injuries, disabilities, disorders, syndromes, etc.
 *
 * @author schema.org
 * @class MedicalCondition
 * @module org.schema
 */
public class MedicalCondition extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalCondition";
	}

}