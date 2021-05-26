const schema = {};
schema.TradeAction = require("./TradeAction.js");
/**
 * Schema.org/RentAction
 * The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment.
 *
 * @author schema.org
 * @class RentAction
 * @module org.schema
 * @extends TradeAction
 */
module.exports = class RentAction extends schema.TradeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RentAction");
	}

	/**
	 * Schema.org/realEstateAgent
	 * A sub property of participant. The real estate agent involved in the action.
	 *
	 * @property realEstateAgent
	 * @type RealEstateAgent
	 */
	realEstateAgent;

	/**
	 * Schema.org/landlord
	 * A sub property of participant. The owner of the real estate property.
	 *
	 * @property landlord
	 * @type Person
	 */
	landlord;

}