/**
 *  Schema.org/ReservationStatusType
 *  Enumerated status values for Reservation.
 * 
 *  @author schema.org
 *  @class ReservationStatusType
 *  @module org.schema
 *  @extends Enumeration
 */
var ReservationStatusType = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "ReservationStatusType";
};
ReservationStatusType = stjs.extend(ReservationStatusType, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
