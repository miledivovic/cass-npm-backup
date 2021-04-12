/**
 * Schema.org/WriteAction
 * The act of authoring written creative content.
 *
 * @author schema.org
 * @class WriteAction
 * @module org.schema
 */
module.exports = class WriteAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "WriteAction";
	}

}