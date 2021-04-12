/**
 * Schema.org/Class
 * A class, also often called a 'Type'; equivalent to rdfs:Class.
 *
 * @author schema.org
 * @class Class
 * @module org.schema
 */
module.exports = class Class extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Class";
	}

}