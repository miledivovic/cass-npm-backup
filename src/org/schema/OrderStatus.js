const schema = {};
schema.StatusEnumeration = require("./StatusEnumeration.js");
/**
 * Schema.org/OrderStatus
 * Enumerated status values for Order.
 *
 * @author schema.org
 * @class OrderStatus
 * @module org.schema
 * @extends StatusEnumeration
 */
module.exports = class OrderStatus extends schema.StatusEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OrderStatus");
	}

}