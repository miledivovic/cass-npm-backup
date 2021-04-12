/**
 * Schema.org/StatusEnumeration
 * Lists or enumerations dealing with status types.
 *
 * @author schema.org
 * @class StatusEnumeration
 * @module org.schema
 */
module.exports = class StatusEnumeration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "StatusEnumeration";
	}

}