/**
 * Schema.org/WearAction
 * The act of dressing oneself in clothing.
 *
 * @author schema.org
 * @class WearAction
 * @module org.schema
 */
module.exports = class WearAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "WearAction";
	}

}