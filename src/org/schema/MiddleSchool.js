/**
 * Schema.org/MiddleSchool
 * A middle school (typically for children aged around 11-14, although this varies somewhat).
 *
 * @author schema.org
 * @class MiddleSchool
 * @module org.schema
 */
module.exports = class MiddleSchool extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MiddleSchool";
	}

}