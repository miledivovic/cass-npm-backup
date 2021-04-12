/**
 * Schema.org/BookFormatType
 * The publication format of the book.
 *
 * @author schema.org
 * @class BookFormatType
 * @module org.schema
 */
module.exports = class BookFormatType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BookFormatType";
	}

}