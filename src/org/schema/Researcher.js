/**
 * Schema.org/Researcher
 * Researchers.
 *
 * @author schema.org
 * @class Researcher
 * @module org.schema
 */
module.exports = class Researcher extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Researcher";
	}

}