/**
 * Schema.org/MarryAction
 * The act of marrying a person.
 *
 * @author schema.org
 * @class MarryAction
 * @module org.schema
 */
module.exports = class MarryAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MarryAction";
	}

}