const schema = {};
schema.Place = require("./Place.js");
/**
 * Schema.org/TouristAttraction
 * A tourist attraction.  In principle any Thing can be a [[TouristAttraction]], from a [[Mountain]] and [[LandmarksOrHistoricalBuildings]] to a [[LocalBusiness]].  This Type can be used on its own to describe a general [[TouristAttraction]], or be used as an [[additionalType]] to add tourist attraction properties to any other type.  (See examples below)
 *
 * @author schema.org
 * @class TouristAttraction
 * @module org.schema
 * @extends Place
 */
module.exports = class TouristAttraction extends schema.Place {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TouristAttraction");
	}

	/**
	 * Schema.org/availableLanguage
	 * A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]
	 *
	 * @property availableLanguage
	 * @type Text
	 */
	availableLanguage;

	/**
	 * Schema.org/touristType
	 * Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc. 
	 *
	 * @property touristType
	 * @type Audience
	 */
	touristType;

}