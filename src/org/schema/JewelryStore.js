/**
 * Schema.org/JewelryStore
 * A jewelry store.
 *
 * @author schema.org
 * @class JewelryStore
 * @module org.schema
 */
module.exports = class JewelryStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","JewelryStore");
	}

}