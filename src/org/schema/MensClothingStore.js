/**
 * Schema.org/MensClothingStore
 * A men's clothing store.
 *
 * @author schema.org
 * @class MensClothingStore
 * @module org.schema
 */
module.exports = class MensClothingStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MensClothingStore";
	}

}