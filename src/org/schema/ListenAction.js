/**
 * Schema.org/ListenAction
 * The act of consuming audio content.
 *
 * @author schema.org
 * @class ListenAction
 * @module org.schema
 */
module.exports = class ListenAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ListenAction";
	}

}