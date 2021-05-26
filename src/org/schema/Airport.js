const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/Airport
 * An airport.
 *
 * @author schema.org
 * @class Airport
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class Airport extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Airport");
	}

	/**
	 * Schema.org/icaoCode
	 * ICAO identifier for an airport.
	 *
	 * @property icaoCode
	 * @type Text
	 */
	icaoCode;

	/**
	 * Schema.org/iataCode
	 * IATA identifier for an airline or airport.
	 *
	 * @property iataCode
	 * @type Text
	 */
	iataCode;

}