const schema = {};
schema.AggregateRating = require("./AggregateRating.js");
/**
 * Schema.org/EmployerAggregateRating
 * An aggregate rating of an Organization related to its role as an employer.
 *
 * @author schema.org
 * @class EmployerAggregateRating
 * @module org.schema
 * @extends AggregateRating
 */
module.exports = class EmployerAggregateRating extends schema.AggregateRating {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EmployerAggregateRating");
	}

}