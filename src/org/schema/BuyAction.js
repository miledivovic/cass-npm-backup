const schema = {};
schema.TradeAction = require("./TradeAction.js");
/**
 * Schema.org/BuyAction
 * The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction.
 *
 * @author schema.org
 * @class BuyAction
 * @module org.schema
 * @extends TradeAction
 */
module.exports = class BuyAction extends schema.TradeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BuyAction");
	}

	/**
	 * Schema.org/seller
	 * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
	 *
	 * @property seller
	 * @type Organization
	 */
	seller;

	/**
	 * Schema.org/vendor
	 * 'vendor' is an earlier term for 'seller'.
	 *
	 * @property vendor
	 * @type Organization
	 */
	vendor;

	/**
	 * Schema.org/warrantyPromise
	 * The warranty promise(s) included in the offer.
	 *
	 * @property warrantyPromise
	 * @type WarrantyPromise
	 */
	warrantyPromise;

}