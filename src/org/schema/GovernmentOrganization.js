/**
 * Schema.org/GovernmentOrganization
 * A governmental organization or agency.
 *
 * @author schema.org
 * @class GovernmentOrganization
 * @module org.schema
 */
module.exports = class GovernmentOrganization extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "GovernmentOrganization";
	}

}