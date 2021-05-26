const schema = {};
schema.Place = require("./Place.js");
/**
 * Schema.org/TouristDestination
 * A tourist destination. In principle any [[Place]] can be a [[TouristDestination]] from a [[City]], Region or [[Country]] to an [[AmusementPark]] or [[Hotel]]. This Type can be used on its own to describe a general [[TouristDestination]], or be used as an [[additionalType]] to add tourist relevant properties to any other [[Place]].  A [[TouristDestination]] is defined as a [[Place]] that contains, or is colocated with, one or more [[TouristAttraction]]s, often linked by a similar theme or interest to a particular [[touristType]]. The [UNWTO](http://www2.unwto.org/) defines Destination (main destination of a tourism trip) as the place visited that is central to the decision to take the trip.
  (See examples below).
 *
 * @author schema.org
 * @class TouristDestination
 * @module org.schema
 * @extends Place
 */
module.exports = class TouristDestination extends schema.Place {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TouristDestination");
	}

	/**
	 * Schema.org/includesAttraction
	 * Attraction located at destination.
	 *
	 * @property includesAttraction
	 * @type TouristAttraction
	 */
	includesAttraction;

	/**
	 * Schema.org/touristType
	 * Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc. 
	 *
	 * @property touristType
	 * @type Audience
	 */
	touristType;

}