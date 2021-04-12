/**
 * Schema.org/ArchiveComponent
 * [object Object]
 *
 * @author schema.org
 * @class ArchiveComponent
 * @module org.schema
 */
module.exports = class ArchiveComponent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ArchiveComponent";
	}

}