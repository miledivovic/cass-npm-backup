/**
 * Schema.org/AnatomicalStructure
 * Any part of the human body, typically a component of an anatomical system. Organs, tissues, and cells are all anatomical structures.
 *
 * @author schema.org
 * @class AnatomicalStructure
 * @module org.schema
 */
public class AnatomicalStructure extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AnatomicalStructure";
	}

}