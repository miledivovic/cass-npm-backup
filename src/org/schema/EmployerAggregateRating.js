/**
 * Schema.org/EmployerAggregateRating
 * An aggregate rating of an Organization related to its role as an employer.
 *
 * @author schema.org
 * @class EmployerAggregateRating
 * @module org.schema
 */
module.exports = class EmployerAggregateRating extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "EmployerAggregateRating";
	}

}