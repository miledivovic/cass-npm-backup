/**
 * Schema.org/InsuranceAgency
 * An Insurance agency.
 *
 * @author schema.org
 * @class InsuranceAgency
 * @module org.schema
 */
module.exports = class InsuranceAgency extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","InsuranceAgency");
	}

}