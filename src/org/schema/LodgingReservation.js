/**
 *  Schema.org/LodgingReservation
 *  A reservation for lodging at a hotel, motel, inn, etc.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 * 
 *  @author schema.org
 *  @class LodgingReservation
 *  @module org.schema
 *  @extends Reservation
 */
var LodgingReservation = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Reservation.call(this);
    this.context = "http://schema.org/";
    this.type = "LodgingReservation";
};
LodgingReservation = stjs.extend(LodgingReservation, Reservation, [], function(constructor, prototype) {
    /**
     *  Schema.org/checkinTime
     *  The earliest someone may check into a lodging establishment.
     * 
     *  @property checkinTime
     *  @type DateTime
     */
    prototype.checkinTime = null;
    /**
     *  Schema.org/numChildren
     *  The number of children staying in the unit.
     * 
     *  @property numChildren
     *  @type Integer
     */
    prototype.numChildren = null;
    /**
     *  Schema.org/lodgingUnitDescription
     *  A full description of the lodging unit.
     * 
     *  @property lodgingUnitDescription
     *  @type Text
     */
    prototype.lodgingUnitDescription = null;
    /**
     *  Schema.org/checkoutTime
     *  The latest someone may check out of a lodging establishment.
     * 
     *  @property checkoutTime
     *  @type DateTime
     */
    prototype.checkoutTime = null;
    /**
     *  Schema.org/lodgingUnitType
     *  Textual description of the unit type (including suite vs. room, size of bed, etc.).
     * 
     *  @property lodgingUnitType
     *  @type Text
     */
    prototype.lodgingUnitType = null;
    /**
     *  Schema.org/numAdults
     *  The number of adults staying in the unit.
     * 
     *  @property numAdults
     *  @type Integer
     */
    prototype.numAdults = null;
}, {provider: "Person", programMembershipUsed: "ProgramMembership", reservationStatus: "ReservationStatusType", underName: "Organization", bookingAgent: "Organization", reservationFor: "Thing", broker: "Person", reservedTicket: "Ticket", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
