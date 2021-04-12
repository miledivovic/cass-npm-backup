/**
 * Schema.org/Sculpture
 * A piece of sculpture.
 *
 * @author schema.org
 * @class Sculpture
 * @module org.schema
 */
module.exports = class Sculpture extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Sculpture";
	}

}