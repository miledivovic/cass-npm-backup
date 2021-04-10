/**
 *  Schema.org/FoodEstablishmentReservation
 *  A reservation to dine at a food-related business.Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 * 
 *  @author schema.org
 *  @class FoodEstablishmentReservation
 *  @module org.schema
 *  @extends Reservation
 */
var FoodEstablishmentReservation = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Reservation.call(this);
    this.context = "http://schema.org/";
    this.type = "FoodEstablishmentReservation";
};
FoodEstablishmentReservation = stjs.extend(FoodEstablishmentReservation, Reservation, [], function(constructor, prototype) {
    /**
     *  Schema.org/startTime
     *  The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from *January* to December.\n\nNote that SchemaEvent uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     * 
     *  @property startTime
     *  @type DateTime
     */
    startTime = null;
    /**
     *  Schema.org/endTime
     *  The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to *December*.\n\nNote that SchemaEvent uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     * 
     *  @property endTime
     *  @type DateTime
     */
    endTime = null;
    /**
     *  Schema.org/partySize
     *  Number of people the reservation should accommodate.
     * 
     *  @property partySize
     *  @type Integer
     */
    partySize = null;
}, {provider: "Person", programMembershipUsed: "ProgramMembership", reservationStatus: "ReservationStatusType", underName: "Organization", bookingAgent: "Organization", reservationFor: "Thing", broker: "Person", reservedTicket: "Ticket", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
