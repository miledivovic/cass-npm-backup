const schema = {};
schema.PropertyValue = require("./PropertyValue.js");
/**
 * Schema.org/LocationFeatureSpecification
 * Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality.
 *
 * @author schema.org
 * @class LocationFeatureSpecification
 * @module org.schema
 * @extends PropertyValue
 */
module.exports = class LocationFeatureSpecification extends schema.PropertyValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LocationFeatureSpecification");
	}

	/**
	 * Schema.org/validFrom
	 * The date when the item becomes valid.
	 *
	 * @property validFrom
	 * @type Date
	 */
	validFrom;

	/**
	 * Schema.org/hoursAvailable
	 * The hours during which this service or contact is available.
	 *
	 * @property hoursAvailable
	 * @type OpeningHoursSpecification
	 */
	hoursAvailable;

	/**
	 * Schema.org/validThrough
	 * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
	 *
	 * @property validThrough
	 * @type Date
	 */
	validThrough;

}