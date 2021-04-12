/**
 * Schema.org/Collection
 * A collection of items e.g. creative works or products.
 *
 * @author schema.org
 * @class Collection
 * @module org.schema
 */
module.exports = class Collection extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Collection";
	}

}