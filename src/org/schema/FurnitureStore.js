/**
 * Schema.org/FurnitureStore
 * A furniture store.
 *
 * @author schema.org
 * @class FurnitureStore
 * @module org.schema
 */
module.exports = class FurnitureStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FurnitureStore");
	}

}