const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Reservation
 * Describes a reservation for travel, dining or an event. Some reservations require tickets. \n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use [[Offer]].
 *
 * @author schema.org
 * @class Reservation
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Reservation extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Reservation");
	}

	/**
	 * Schema.org/underName
	 * The person or organization the reservation or ticket is for.
	 *
	 * @property underName
	 * @type Organization
	 */
	underName;

	/**
	 * Schema.org/reservationStatus
	 * The current status of the reservation.
	 *
	 * @property reservationStatus
	 * @type ReservationStatusType
	 */
	reservationStatus;

	/**
	 * Schema.org/programMembershipUsed
	 * Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation.
	 *
	 * @property programMembershipUsed
	 * @type ProgramMembership
	 */
	programMembershipUsed;

	/**
	 * Schema.org/priceCurrency
	 * The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
	 *
	 * @property priceCurrency
	 * @type Text
	 */
	priceCurrency;

	/**
	 * Schema.org/broker
	 * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
	 *
	 * @property broker
	 * @type Organization
	 */
	broker;

	/**
	 * Schema.org/bookingTime
	 * The date and time the reservation was booked.
	 *
	 * @property bookingTime
	 * @type DateTime
	 */
	bookingTime;

	/**
	 * Schema.org/provider
	 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
	 *
	 * @property provider
	 * @type Organization
	 */
	provider;

	/**
	 * Schema.org/reservationId
	 * A unique identifier for the reservation.
	 *
	 * @property reservationId
	 * @type Text
	 */
	reservationId;

	/**
	 * Schema.org/modifiedTime
	 * The date and time the reservation was modified.
	 *
	 * @property modifiedTime
	 * @type DateTime
	 */
	modifiedTime;

	/**
	 * Schema.org/totalPrice
	 * The total price for the reservation or ticket, including applicable taxes, shipping, etc.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
	 *
	 * @property totalPrice
	 * @type Number
	 */
	totalPrice;

	/**
	 * Schema.org/reservationFor
	 * The thing -- flight, event, restaurant,etc. being reserved.
	 *
	 * @property reservationFor
	 * @type Thing
	 */
	reservationFor;

	/**
	 * Schema.org/bookingAgent
	 * 'bookingAgent' is an out-dated term indicating a 'broker' that serves as a booking agent.
	 *
	 * @property bookingAgent
	 * @type Organization
	 */
	bookingAgent;

	/**
	 * Schema.org/reservedTicket
	 * A ticket associated with the reservation.
	 *
	 * @property reservedTicket
	 * @type Ticket
	 */
	reservedTicket;

}