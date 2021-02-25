/**
 *  Schema.org/TaxiReservation
 *  A reservation for a taxi.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 * 
 *  @author schema.org
 *  @class TaxiReservation
 *  @module org.schema
 *  @extends Reservation
 */
var TaxiReservation = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Reservation.call(this);
    this.context = "http://schema.org/";
    this.type = "TaxiReservation";
};
TaxiReservation = stjs.extend(TaxiReservation, Reservation, [], function(constructor, prototype) {
    /**
     *  Schema.org/pickupTime
     *  When a taxi will pickup a passenger or a rental car can be picked up.
     * 
     *  @property pickupTime
     *  @type DateTime
     */
    prototype.pickupTime = null;
    /**
     *  Schema.org/partySize
     *  Number of people the reservation should accommodate.
     * 
     *  @property partySize
     *  @type Integer
     */
    prototype.partySize = null;
    /**
     *  Schema.org/pickupLocation
     *  Where a taxi will pick up a passenger or a rental car can be picked up.
     * 
     *  @property pickupLocation
     *  @type Place
     */
    prototype.pickupLocation = null;
}, {pickupLocation: "Place", provider: "Person", programMembershipUsed: "ProgramMembership", reservationStatus: "ReservationStatusType", underName: "Organization", bookingAgent: "Organization", reservationFor: "Thing", broker: "Person", reservedTicket: "Ticket", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
