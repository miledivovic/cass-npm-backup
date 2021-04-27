/**
 * Schema.org/MotorcycleRepair
 * A motorcycle repair shop.
 *
 * @author schema.org
 * @class MotorcycleRepair
 * @module org.schema
 */
module.exports = class MotorcycleRepair extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MotorcycleRepair");
	}
};
