/**
 * Schema.org/AccountingService
 * Accountancy business.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s).
      
 *
 * @author schema.org
 * @class AccountingService
 * @module org.schema
 */
module.exports = class AccountingService extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AccountingService";
	}

}