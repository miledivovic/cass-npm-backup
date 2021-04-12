/**
 * Schema.org/AnimalShelter
 * Animal shelter.
 *
 * @author schema.org
 * @class AnimalShelter
 * @module org.schema
 */
module.exports = class AnimalShelter extends EcRemoteLinkedData {
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