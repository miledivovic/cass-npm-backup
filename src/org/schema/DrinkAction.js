/**
 * Schema.org/DrinkAction
 * The act of swallowing liquids.
 *
 * @author schema.org
 * @class DrinkAction
 * @module org.schema
 */
module.exports = class DrinkAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DrinkAction";
	}

}