/**
 * Schema.org/MotorcycleDealer
 * A motorcycle dealer.
 *
 * @author schema.org
 * @class MotorcycleDealer
 * @module org.schema
 */
module.exports = class MotorcycleDealer extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MotorcycleDealer";
	}

}