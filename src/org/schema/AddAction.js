/**
 * Schema.org/AddAction
 * The act of editing by adding an object to a collection.
 *
 * @author schema.org
 * @class AddAction
 * @module org.schema
 */
module.exports = class AddAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AddAction";
	}

}