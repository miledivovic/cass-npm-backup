const schema = {};
schema.TradeAction = require("./TradeAction.js");
/**
 * Schema.org/QuoteAction
 * An agent quotes/estimates/appraises an object/product/service with a price at a location/store.
 *
 * @author schema.org
 * @class QuoteAction
 * @module org.schema
 * @extends TradeAction
 */
module.exports = class QuoteAction extends schema.TradeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","QuoteAction");
	}

}