/**
 * Schema.org/EmploymentAgency
 * An employment agency.
 *
 * @author schema.org
 * @class EmploymentAgency
 * @module org.schema
 */
module.exports = class EmploymentAgency extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "EmploymentAgency";
	}

}