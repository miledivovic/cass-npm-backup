/**
 * Schema.org/DaySpa
 * A day spa.
 *
 * @author schema.org
 * @class DaySpa
 * @module org.schema
 */
module.exports = class DaySpa extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DaySpa";
	}

}