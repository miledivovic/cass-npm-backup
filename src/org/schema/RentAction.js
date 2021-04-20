/**
 * Schema.org/RentAction
 * The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment.
 *
 * @author schema.org
 * @class RentAction
 * @module org.schema
 */
module.exports = class RentAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RentAction");
	}

}