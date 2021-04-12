/**
 * Schema.org/Attorney
 * Professional service: Attorney. \n\nThis type is deprecated - [[LegalService]] is more inclusive and less ambiguous.
 *
 * @author schema.org
 * @class Attorney
 * @module org.schema
 */
module.exports = class Attorney extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Attorney";
	}

}