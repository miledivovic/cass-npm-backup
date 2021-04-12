/**
 * Schema.org/Thing
 * The most generic type of item.
 *
 * @author schema.org
 * @class Thing
 * @module org.schema
 */
module.exports = class Thing extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Thing";
	}

}