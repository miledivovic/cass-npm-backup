/**
 * Schema.org/MortgageLoan
 * A loan in which property or real estate is used as collateral. (A loan securitized against some real estate).
 *
 * @author schema.org
 * @class MortgageLoan
 * @module org.schema
 */
module.exports = class MortgageLoan extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MortgageLoan");
	}
};
