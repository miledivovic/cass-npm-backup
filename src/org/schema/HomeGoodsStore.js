/**
 * Schema.org/HomeGoodsStore
 * A home goods store.
 *
 * @author schema.org
 * @class HomeGoodsStore
 * @module org.schema
 */
module.exports = class HomeGoodsStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HomeGoodsStore";
	}

}