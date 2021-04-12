/**
 * Schema.org/ElementarySchool
 * An elementary school.
 *
 * @author schema.org
 * @class ElementarySchool
 * @module org.schema
 */
module.exports = class ElementarySchool extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ElementarySchool";
	}

}