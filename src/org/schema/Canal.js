/**
 * Schema.org/Canal
 * A canal, like the Panama Canal.
 *
 * @author schema.org
 * @class Canal
 * @module org.schema
 */
module.exports = class Canal extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Canal";
	}

}