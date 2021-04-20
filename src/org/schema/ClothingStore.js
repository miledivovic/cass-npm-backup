/**
 * Schema.org/ClothingStore
 * A clothing store.
 *
 * @author schema.org
 * @class ClothingStore
 * @module org.schema
 */
module.exports = class ClothingStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ClothingStore");
	}

}