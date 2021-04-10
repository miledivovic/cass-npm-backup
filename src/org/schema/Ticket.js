/**
 *  Schema.org/Ticket
 *  Used to describe a ticket to an event, a flight, a bus ride, etc.
 * 
 *  @author schema.org
 *  @class Ticket
 *  @module org.schema
 *  @extends Intangible
 */
var Ticket = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "Ticket";
};
Ticket = stjs.extend(Ticket, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/underName
     *  The person or organization the reservation or ticket is for.
     * 
     *  @property underName
     *  @type Organization
     */
    underName = null;
    /**
     *  Schema.org/totalPrice
     *  The total price for the reservation or ticket, including applicable taxes, shipping, etc.
     * 
     *  @property totalPrice
     *  @type Number
     */
    totalPrice = null;
    /**
     *  Schema.org/priceCurrency
     *  The currency (in 3-letter ISO 4217 format) of the price or a price component, when attached to [[PriceSpecification]] and its subtypes.
     * 
     *  @property priceCurrency
     *  @type Text
     */
    priceCurrency = null;
    /**
     *  Schema.org/ticketNumber
     *  The unique identifier for the ticket.
     * 
     *  @property ticketNumber
     *  @type Text
     */
    ticketNumber = null;
    /**
     *  Schema.org/issuedBy
     *  The organization issuing the ticket or permit.
     * 
     *  @property issuedBy
     *  @type Organization
     */
    issuedBy = null;
    /**
     *  Schema.org/ticketToken
     *  Reference to an asset (e.g., Barcode, QR code image or PDF) usable for entrance.
     * 
     *  @property ticketToken
     *  @type URL
     */
    ticketToken = null;
    /**
     *  Schema.org/ticketedSeat
     *  The seat associated with the ticket.
     * 
     *  @property ticketedSeat
     *  @type Seat
     */
    ticketedSeat = null;
    /**
     *  Schema.org/dateIssued
     *  The date the ticket was issued.
     * 
     *  @property dateIssued
     *  @type DateTime
     */
    dateIssued = null;
}, {underName: "Organization", issuedBy: "Organization", ticketedSeat: "Seat", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
