/**
 * Schema.org/ToyStore
 * A toy store.
 *
 * @author schema.org
 * @class ToyStore
 * @module org.schema
 */
module.exports = class ToyStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ToyStore";
	}

}