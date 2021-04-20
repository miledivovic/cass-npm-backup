/**
 * Schema.org/MedicalCondition
 * Any condition of the human body that affects the normal functioning of a person, whether physically or mentally. Includes diseases, injuries, disabilities, disorders, syndromes, etc.
 *
 * @author schema.org
 * @class MedicalCondition
 * @module org.schema
 */
module.exports = class MedicalCondition extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalCondition");
	}

}