/**
 * Schema.org/Museum
 * A museum.
 *
 * @author schema.org
 * @class Museum
 * @module org.schema
 */
module.exports = class Museum extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Museum";
	}

}