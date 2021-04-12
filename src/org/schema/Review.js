/**
 * Schema.org/Review
 * A review of an item - for example, of a restaurant, movie, or store.
 *
 * @author schema.org
 * @class Review
 * @module org.schema
 */
module.exports = class Review extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Review";
	}

}