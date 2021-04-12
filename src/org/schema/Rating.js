/**
 * Schema.org/Rating
 * A rating is an evaluation on a numeric scale, such as 1 to 5 stars.
 *
 * @author schema.org
 * @class Rating
 * @module org.schema
 */
module.exports = class Rating extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Rating";
	}

}