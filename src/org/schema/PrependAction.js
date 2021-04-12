/**
 * Schema.org/PrependAction
 * The act of inserting at the beginning if an ordered collection.
 *
 * @author schema.org
 * @class PrependAction
 * @module org.schema
 */
module.exports = class PrependAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PrependAction";
	}

}