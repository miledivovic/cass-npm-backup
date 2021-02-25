/**
 *  Schema.org/FlightReservation
 *  A reservation for air travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 * 
 *  @author schema.org
 *  @class FlightReservation
 *  @module org.schema
 *  @extends Reservation
 */
var FlightReservation = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Reservation.call(this);
    this.context = "http://schema.org/";
    this.type = "FlightReservation";
};
FlightReservation = stjs.extend(FlightReservation, Reservation, [], function(constructor, prototype) {
    /**
     *  Schema.org/passengerSequenceNumber
     *  The passenger's sequence number as assigned by the airline.
     * 
     *  @property passengerSequenceNumber
     *  @type Text
     */
    prototype.passengerSequenceNumber = null;
    /**
     *  Schema.org/securityScreening
     *  The type of security screening the passenger is subject to.
     * 
     *  @property securityScreening
     *  @type Text
     */
    prototype.securityScreening = null;
    /**
     *  Schema.org/passengerPriorityStatus
     *  The priority status assigned to a passenger for security or boarding (e.g. FastTrack or Priority).
     * 
     *  @property passengerPriorityStatus
     *  @type QualitativeValue
     */
    prototype.passengerPriorityStatus = null;
    /**
     *  Schema.org/boardingGroup
     *  The airline-specific indicator of boarding order / preference.
     * 
     *  @property boardingGroup
     *  @type Text
     */
    prototype.boardingGroup = null;
}, {passengerPriorityStatus: "QualitativeValue", provider: "Person", programMembershipUsed: "ProgramMembership", reservationStatus: "ReservationStatusType", underName: "Organization", bookingAgent: "Organization", reservationFor: "Thing", broker: "Person", reservedTicket: "Ticket", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
