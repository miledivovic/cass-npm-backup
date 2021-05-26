const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/BedDetails
 * An entity holding detailed information about the available bed types, e.g. the quantity of twin beds for a hotel room. For the single case of just one bed of a certain type, you can use bed directly with a text. See also [[BedType]] (under development).
 *
 * @author schema.org
 * @class BedDetails
 * @module org.schema
 * @extends Intangible
 */
module.exports = class BedDetails extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BedDetails");
	}

	/**
	 * Schema.org/numberOfBeds
	 * The quantity of the given bed type available in the HotelRoom, Suite, House, or Apartment.
	 *
	 * @property numberOfBeds
	 * @type Number
	 */
	numberOfBeds;

	/**
	 * Schema.org/typeOfBed
	 * The type of bed to which the BedDetail refers, i.e. the type of bed available in the quantity indicated by quantity.
	 *
	 * @property typeOfBed
	 * @type BedType
	 */
	typeOfBed;

}