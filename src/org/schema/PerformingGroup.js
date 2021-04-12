/**
 * Schema.org/PerformingGroup
 * A performance group, such as a band, an orchestra, or a circus.
 *
 * @author schema.org
 * @class PerformingGroup
 * @module org.schema
 */
module.exports = class PerformingGroup extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PerformingGroup";
	}

}