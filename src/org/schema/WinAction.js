/**
 * Schema.org/WinAction
 * The act of achieving victory in a competitive activity.
 *
 * @author schema.org
 * @class WinAction
 * @module org.schema
 */
module.exports = class WinAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "WinAction";
	}

}