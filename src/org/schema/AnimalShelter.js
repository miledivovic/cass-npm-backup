/**
 * Schema.org/AnimalShelter
 * Animal shelter.
 *
 * @author schema.org
 * @class AnimalShelter
 * @module org.schema
 */
public class AnimalShelter extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AnimalShelter";
	}

}