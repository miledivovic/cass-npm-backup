/**
 * Schema.org/EntryPoint
 * An entry point, within some Web-based protocol.
 *
 * @author schema.org
 * @class EntryPoint
 * @module org.schema
 */
module.exports = class EntryPoint extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "EntryPoint";
	}

}