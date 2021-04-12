/**
 * Schema.org/TipAction
 * The act of giving money voluntarily to a beneficiary in recognition of services rendered.
 *
 * @author schema.org
 * @class TipAction
 * @module org.schema
 */
module.exports = class TipAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TipAction";
	}

}