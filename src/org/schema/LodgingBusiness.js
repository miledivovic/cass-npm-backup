const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/LodgingBusiness
 * A lodging business, such as a motel, hotel, or inn.
 *
 * @author schema.org
 * @class LodgingBusiness
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class LodgingBusiness extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LodgingBusiness");
	}

	/**
	 * Schema.org/checkinTime
	 * The earliest someone may check into a lodging establishment.
	 *
	 * @property checkinTime
	 * @type DateTime
	 */
	checkinTime;

	/**
	 * Schema.org/starRating
	 * An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars).
	 *
	 * @property starRating
	 * @type Rating
	 */
	starRating;

	/**
	 * Schema.org/availableLanguage
	 * A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]
	 *
	 * @property availableLanguage
	 * @type Text
	 */
	availableLanguage;

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
	 * Schema.org/amenityFeature
	 * An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
	 *
	 * @property amenityFeature
	 * @type LocationFeatureSpecification
	 */
	amenityFeature;

	/**
	 * Schema.org/petsAllowed
	 * Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value.
	 *
	 * @property petsAllowed
	 * @type Boolean
	 */
	petsAllowed;

	/**
	 * Schema.org/checkoutTime
	 * The latest someone may check out of a lodging establishment.
	 *
	 * @property checkoutTime
	 * @type DateTime
	 */
	checkoutTime;

	/**
	 * Schema.org/audience
	 * An intended audience, i.e. a group for whom something was created.
	 *
	 * @property audience
	 * @type Audience
	 */
	audience;

}