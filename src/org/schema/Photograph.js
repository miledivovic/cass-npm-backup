/**
 * Schema.org/Photograph
 * A photograph.
 *
 * @author schema.org
 * @class Photograph
 * @module org.schema
 */
module.exports = class Photograph extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Photograph";
	}

}