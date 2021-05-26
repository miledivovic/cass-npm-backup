const schema = {};
schema.ContactPoint = require("./ContactPoint.js");
/**
 * Schema.org/PostalAddress
 * The mailing address.
 *
 * @author schema.org
 * @class PostalAddress
 * @module org.schema
 * @extends ContactPoint
 */
module.exports = class PostalAddress extends schema.ContactPoint {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PostalAddress");
	}

	/**
	 * Schema.org/addressLocality
	 * The locality in which the street address is, and which is in the region. For example, Mountain View.
	 *
	 * @property addressLocality
	 * @type Text
	 */
	addressLocality;

	/**
	 * Schema.org/addressCountry
	 * The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1).
	 *
	 * @property addressCountry
	 * @type Country
	 */
	addressCountry;

	/**
	 * Schema.org/postOfficeBoxNumber
	 * The post office box number for PO box addresses.
	 *
	 * @property postOfficeBoxNumber
	 * @type Text
	 */
	postOfficeBoxNumber;

	/**
	 * Schema.org/streetAddress
	 * The street address. For example, 1600 Amphitheatre Pkwy.
	 *
	 * @property streetAddress
	 * @type Text
	 */
	streetAddress;

	/**
	 * Schema.org/addressRegion
	 * The region in which the locality is, and which is in the country. For example, California or another appropriate first-level [Administrative division](https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country) 
	 *
	 * @property addressRegion
	 * @type Text
	 */
	addressRegion;

	/**
	 * Schema.org/postalCode
	 * The postal code. For example, 94043.
	 *
	 * @property postalCode
	 * @type Text
	 */
	postalCode;

}