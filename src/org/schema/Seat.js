/**
 *  Schema.org/Seat
 *  Used to describe a seat, such as a reserved seat in an event reservation.
 * 
 *  @author schema.org
 *  @class Seat
 *  @module org.schema
 *  @extends Intangible
 */
var Seat = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "Seat";
};
Seat = stjs.extend(Seat, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/seatingType
     *  The type/class of the seat.
     * 
     *  @property seatingType
     *  @type Text
     */
    prototype.seatingType = null;
    /**
     *  Schema.org/seatSection
     *  The section location of the reserved seat (e.g. Orchestra).
     * 
     *  @property seatSection
     *  @type Text
     */
    prototype.seatSection = null;
    /**
     *  Schema.org/seatRow
     *  The row location of the reserved seat (e.g., B).
     * 
     *  @property seatRow
     *  @type Text
     */
    prototype.seatRow = null;
    /**
     *  Schema.org/seatNumber
     *  The location of the reserved seat (e.g., 27).
     * 
     *  @property seatNumber
     *  @type Text
     */
    prototype.seatNumber = null;
}, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
