const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/GeoCoordinates
 * The geographic coordinates of a place or event.
 *
 * @author schema.org
 * @class GeoCoordinates
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class GeoCoordinates extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GeoCoordinates");
	}

	/**
	 * Schema.org/address
	 * Physical address of the item.
	 *
	 * @property address
	 * @type Text
	 */
	address;

	/**
	 * Schema.org/longitude
	 * The longitude of a location. For example ```-122.08585``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
	 *
	 * @property longitude
	 * @type Number
	 */
	longitude;

	/**
	 * Schema.org/addressCountry
	 * The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1).
	 *
	 * @property addressCountry
	 * @type Country
	 */
	addressCountry;

	/**
	 * Schema.org/latitude
	 * The latitude of a location. For example ```37.42242``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
	 *
	 * @property latitude
	 * @type Text
	 */
	latitude;

	/**
	 * Schema.org/postalCode
	 * The postal code. For example, 94043.
	 *
	 * @property postalCode
	 * @type Text
	 */
	postalCode;

	/**
	 * Schema.org/elevation
	 * The elevation of a location ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). Values may be of the form 'NUMBER UNIT_OF_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters.
	 *
	 * @property elevation
	 * @type Number
	 */
	elevation;

}