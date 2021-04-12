/**
 * Schema.org/ChildCare
 * A Childcare center.
 *
 * @author schema.org
 * @class ChildCare
 * @module org.schema
 */
module.exports = class ChildCare extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ChildCare";
	}

}