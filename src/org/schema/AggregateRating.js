/**
 * Schema.org/AggregateRating
 * The average rating based on multiple ratings or reviews.
 *
 * @author schema.org
 * @class AggregateRating
 * @module org.schema
 */
public class AggregateRating extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AggregateRating";
	}

}