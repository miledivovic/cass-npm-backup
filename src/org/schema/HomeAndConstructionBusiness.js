/**
 * Schema.org/HomeAndConstructionBusiness
 * A construction business.\n\nA HomeAndConstructionBusiness is a [[LocalBusiness]] that provides services around homes and buildings.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s).
 *
 * @author schema.org
 * @class HomeAndConstructionBusiness
 * @module org.schema
 */
module.exports = class HomeAndConstructionBusiness extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HomeAndConstructionBusiness";
	}

}