/**
 * Schema.org/CookAction
 * The act of producing/preparing food.
 *
 * @author schema.org
 * @class CookAction
 * @module org.schema
 */
module.exports = class CookAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "CookAction";
	}

}