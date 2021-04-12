/**
 * Schema.org/ContactPoint
 * A contact point&#x2014;for example, a Customer Complaints department.
 *
 * @author schema.org
 * @class ContactPoint
 * @module org.schema
 */
module.exports = class ContactPoint extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ContactPoint";
	}

}