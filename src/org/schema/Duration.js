/**
 * Schema.org/Duration
 * Quantity: Duration (use [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601)).
 *
 * @author schema.org
 * @class Duration
 * @module org.schema
 */
module.exports = class Duration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Duration";
	}

}