/**
 * Schema.org/WholesaleStore
 * A wholesale store.
 *
 * @author schema.org
 * @class WholesaleStore
 * @module org.schema
 */
module.exports = class WholesaleStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "WholesaleStore";
	}

}