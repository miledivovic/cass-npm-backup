/**
 * Schema.org/MoneyTransfer
 * The act of transferring money from one place to another place. This may occur electronically or physically.
 *
 * @author schema.org
 * @class MoneyTransfer
 * @module org.schema
 */
module.exports = class MoneyTransfer extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MoneyTransfer";
	}

}