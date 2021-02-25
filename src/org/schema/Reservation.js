/**
 *  Schema.org/Reservation
 *  Describes a reservation for travel, dining or an event. Some reservations require tickets. \n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use [[Offer]].
 * 
 *  @author schema.org
 *  @class Reservation
 *  @module org.schema
 *  @extends Intangible
 */
var Reservation = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "Reservation";
};
Reservation = stjs.extend(Reservation, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/provider
     *  The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     * 
     *  @property provider
     *  @type Person
     */
    prototype.provider = null;
    /**
     *  Schema.org/programMembershipUsed
     *  Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation.
     * 
     *  @property programMembershipUsed
     *  @type ProgramMembership
     */
    prototype.programMembershipUsed = null;
    /**
     *  Schema.org/reservationStatus
     *  The current status of the reservation.
     * 
     *  @property reservationStatus
     *  @type ReservationStatusType
     */
    prototype.reservationStatus = null;
    /**
     *  Schema.org/underName
     *  The person or organization the reservation or ticket is for.
     * 
     *  @property underName
     *  @type Organization
     */
    prototype.underName = null;
    /**
     *  Schema.org/bookingAgent
     *  'bookingAgent' is an out-dated term indicating a 'broker' that serves as a booking agent.
     * 
     *  @property bookingAgent
     *  @type Organization
     */
    prototype.bookingAgent = null;
    /**
     *  Schema.org/totalPrice
     *  The total price for the reservation or ticket, including applicable taxes, shipping, etc.
     * 
     *  @property totalPrice
     *  @type Number
     */
    prototype.totalPrice = null;
    /**
     *  Schema.org/reservationFor
     *  The thing -- flight, event, restaurant,etc. being reserved.
     * 
     *  @property reservationFor
     *  @type Thing
     */
    prototype.reservationFor = null;
    /**
     *  Schema.org/priceCurrency
     *  The currency (in 3-letter ISO 4217 format) of the price or a price component, when attached to [[PriceSpecification]] and its subtypes.
     * 
     *  @property priceCurrency
     *  @type Text
     */
    prototype.priceCurrency = null;
    /**
     *  Schema.org/broker
     *  An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
     * 
     *  @property broker
     *  @type Person
     */
    prototype.broker = null;
    /**
     *  Schema.org/modifiedTime
     *  The date and time the reservation was modified.
     * 
     *  @property modifiedTime
     *  @type DateTime
     */
    prototype.modifiedTime = null;
    /**
     *  Schema.org/bookingTime
     *  The date and time the reservation was booked.
     * 
     *  @property bookingTime
     *  @type DateTime
     */
    prototype.bookingTime = null;
    /**
     *  Schema.org/reservationId
     *  A unique identifier for the reservation.
     * 
     *  @property reservationId
     *  @type Text
     */
    prototype.reservationId = null;
    /**
     *  Schema.org/reservedTicket
     *  A ticket associated with the reservation.
     * 
     *  @property reservedTicket
     *  @type Ticket
     */
    prototype.reservedTicket = null;
}, {provider: "Person", programMembershipUsed: "ProgramMembership", reservationStatus: "ReservationStatusType", underName: "Organization", bookingAgent: "Organization", reservationFor: "Thing", broker: "Person", reservedTicket: "Ticket", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
