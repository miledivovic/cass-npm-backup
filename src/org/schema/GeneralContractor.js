/**
 * Schema.org/GeneralContractor
 * A general contractor.
 *
 * @author schema.org
 * @class GeneralContractor
 * @module org.schema
 */
module.exports = class GeneralContractor extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "GeneralContractor";
	}

}