const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Trip
 * A trip or journey. An itinerary of visits to one or more places.
 *
 * @author schema.org
 * @class Trip
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Trip extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Trip");
	}

	/**
	 * Schema.org/itinerary
	 * Destination(s) ( [[Place]] ) that make up a trip. For a trip where destination order is important use [[ItemList]] to specify that order (see examples).
	 *
	 * @property itinerary
	 * @type Place
	 */
	itinerary;

	/**
	 * Schema.org/subTrip
	 * Identifies a [[Trip]] that is a subTrip of this Trip.  For example Day 1, Day 2, etc. of a multi-day trip.
	 *
	 * @property subTrip
	 * @type Trip
	 */
	subTrip;

	/**
	 * Schema.org/partOfTrip
	 * Identifies that this [[Trip]] is a subTrip of another Trip.  For example Day 1, Day 2, etc. of a multi-day trip.
	 *
	 * @property partOfTrip
	 * @type Trip
	 */
	partOfTrip;

	/**
	 * Schema.org/arrivalTime
	 * The expected arrival time.
	 *
	 * @property arrivalTime
	 * @type Time
	 */
	arrivalTime;

	/**
	 * Schema.org/offers
	 * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
      
	 *
	 * @property offers
	 * @type Demand
	 */
	offers;

	/**
	 * Schema.org/provider
	 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
	 *
	 * @property provider
	 * @type Organization
	 */
	provider;

	/**
	 * Schema.org/departureTime
	 * The expected departure time.
	 *
	 * @property departureTime
	 * @type Time
	 */
	departureTime;

}