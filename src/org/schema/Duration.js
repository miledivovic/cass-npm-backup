const schema = {};
schema.Quantity = require("./Quantity.js");
/**
 * Schema.org/Duration
 * Quantity: Duration (use [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601)).
 *
 * @author schema.org
 * @class Duration
 * @module org.schema
 * @extends Quantity
 */
module.exports = class Duration extends schema.Quantity {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Duration");
	}

}