/**
 *  Schema.org/ReservationPackage
 *  A group of multiple reservations with common values for all sub-reservations.
 * 
 *  @author schema.org
 *  @class ReservationPackage
 *  @module org.schema
 *  @extends Reservation
 */
var ReservationPackage = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Reservation.call(this);
    this.context = "http://schema.org/";
    this.type = "ReservationPackage";
};
ReservationPackage = stjs.extend(ReservationPackage, Reservation, [], function(constructor, prototype) {
    /**
     *  Schema.org/subReservation
     *  The individual reservations included in the package. Typically a repeated property.
     * 
     *  @property subReservation
     *  @type Reservation
     */
    prototype.subReservation = null;
}, {subReservation: "Reservation", provider: "Person", programMembershipUsed: "ProgramMembership", reservationStatus: "ReservationStatusType", underName: "Organization", bookingAgent: "Organization", reservationFor: "Thing", broker: "Person", reservedTicket: "Ticket", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
