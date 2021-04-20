/**
 * Schema.org/ShoeStore
 * A shoe store.
 *
 * @author schema.org
 * @class ShoeStore
 * @module org.schema
 */
module.exports = class ShoeStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ShoeStore");
	}

}