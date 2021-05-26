const schema = {};
schema.House = require("./House.js");
/**
 * Schema.org/SingleFamilyResidence
 * Residence type: Single-family home.
 *
 * @author schema.org
 * @class SingleFamilyResidence
 * @module org.schema
 * @extends House
 */
module.exports = class SingleFamilyResidence extends schema.House {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SingleFamilyResidence");
	}

	/**
	 * Schema.org/numberOfRooms
	 * The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
	 *
	 * @property numberOfRooms
	 * @type QuantitativeValue
	 */
	numberOfRooms;

	/**
	 * Schema.org/occupancy
	 * The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).
Typical unit code(s): C62 for person
	 *
	 * @property occupancy
	 * @type QuantitativeValue
	 */
	occupancy;

}