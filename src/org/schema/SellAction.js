/**
 * Schema.org/SellAction
 * The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction.
 *
 * @author schema.org
 * @class SellAction
 * @module org.schema
 */
module.exports = class SellAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SellAction");
	}

}