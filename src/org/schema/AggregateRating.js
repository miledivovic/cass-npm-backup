/**
 * Schema.org/AggregateRating
 * The average rating based on multiple ratings or reviews.
 *
 * @author schema.org
 * @class AggregateRating
 * @module org.schema
 */
module.exports = class AggregateRating extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "AggregateRating");
	}
};
