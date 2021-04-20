/**
 * Schema.org/FinancialService
 * Financial services business.
 *
 * @author schema.org
 * @class FinancialService
 * @module org.schema
 */
module.exports = class FinancialService extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FinancialService");
	}

}