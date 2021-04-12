/**
 * Schema.org/Volcano
 * A volcano, like Fuji san.
 *
 * @author schema.org
 * @class Volcano
 * @module org.schema
 */
module.exports = class Volcano extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Volcano";
	}

}