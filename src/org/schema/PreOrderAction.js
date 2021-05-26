const schema = {};
schema.TradeAction = require("./TradeAction.js");
/**
 * Schema.org/PreOrderAction
 * An agent orders a (not yet released) object/product/service to be delivered/sent.
 *
 * @author schema.org
 * @class PreOrderAction
 * @module org.schema
 * @extends TradeAction
 */
module.exports = class PreOrderAction extends schema.TradeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PreOrderAction");
	}

}