/**
 *  Schema.org/RentalCarReservation
 *  A reservation for a rental car.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 * 
 *  @author schema.org
 *  @class RentalCarReservation
 *  @module org.schema
 *  @extends Reservation
 */
var RentalCarReservation = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Reservation.call(this);
    this.context = "http://schema.org/";
    this.type = "RentalCarReservation";
};
RentalCarReservation = stjs.extend(RentalCarReservation, Reservation, [], function(constructor, prototype) {
    /**
     *  Schema.org/pickupTime
     *  When a taxi will pickup a passenger or a rental car can be picked up.
     * 
     *  @property pickupTime
     *  @type DateTime
     */
    pickupTime = null;
    /**
     *  Schema.org/dropoffTime
     *  When a rental car can be dropped off.
     * 
     *  @property dropoffTime
     *  @type DateTime
     */
    dropoffTime = null;
    /**
     *  Schema.org/dropoffLocation
     *  Where a rental car can be dropped off.
     * 
     *  @property dropoffLocation
     *  @type Place
     */
    dropoffLocation = null;
    /**
     *  Schema.org/pickupLocation
     *  Where a taxi will pick up a passenger or a rental car can be picked up.
     * 
     *  @property pickupLocation
     *  @type Place
     */
    pickupLocation = null;
}, {dropoffLocation: "Place", pickupLocation: "Place", provider: "Person", programMembershipUsed: "ProgramMembership", reservationStatus: "ReservationStatusType", underName: "Organization", bookingAgent: "Organization", reservationFor: "Thing", broker: "Person", reservedTicket: "Ticket", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
