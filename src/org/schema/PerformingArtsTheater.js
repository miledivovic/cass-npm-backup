/**
 * Schema.org/PerformingArtsTheater
 * A theater or other performing art center.
 *
 * @author schema.org
 * @class PerformingArtsTheater
 * @module org.schema
 */
module.exports = class PerformingArtsTheater extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PerformingArtsTheater";
	}

}