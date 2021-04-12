/**
 * Schema.org/Florist
 * A florist.
 *
 * @author schema.org
 * @class Florist
 * @module org.schema
 */
module.exports = class Florist extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Florist";
	}

}