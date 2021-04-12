/**
 * Schema.org/Synagogue
 * A synagogue.
 *
 * @author schema.org
 * @class Synagogue
 * @module org.schema
 */
module.exports = class Synagogue extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Synagogue";
	}

}