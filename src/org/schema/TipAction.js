const schema = {};
schema.TradeAction = require("./TradeAction.js");
/**
 * Schema.org/TipAction
 * The act of giving money voluntarily to a beneficiary in recognition of services rendered.
 *
 * @author schema.org
 * @class TipAction
 * @module org.schema
 * @extends TradeAction
 */
module.exports = class TipAction extends schema.TradeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TipAction");
	}

	/**
	 * Schema.org/recipient
	 * A sub property of participant. The participant who is at the receiving end of the action.
	 *
	 * @property recipient
	 * @type Organization
	 */
	recipient;

}