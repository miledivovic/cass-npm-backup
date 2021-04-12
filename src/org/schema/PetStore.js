/**
 * Schema.org/PetStore
 * A pet store.
 *
 * @author schema.org
 * @class PetStore
 * @module org.schema
 */
module.exports = class PetStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PetStore";
	}

}