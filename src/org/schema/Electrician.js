/**
 * Schema.org/Electrician
 * An electrician.
 *
 * @author schema.org
 * @class Electrician
 * @module org.schema
 */
module.exports = class Electrician extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Electrician";
	}

}