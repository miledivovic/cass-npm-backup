/**
 * Schema.org/VeterinaryCare
 * A vet's office.
 *
 * @author schema.org
 * @class VeterinaryCare
 * @module org.schema
 */
module.exports = class VeterinaryCare extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "VeterinaryCare";
	}

}