/**
 * Schema.org/Bridge
 * A bridge.
 *
 * @author schema.org
 * @class Bridge
 * @module org.schema
 */
module.exports = class Bridge extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Bridge";
	}

}