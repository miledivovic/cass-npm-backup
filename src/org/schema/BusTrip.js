/**
 *  Schema.org/BusTrip
 *  A trip on a commercial bus line.
 * 
 *  @author schema.org
 *  @class BusTrip
 *  @module org.schema
 *  @extends Intangible
 */
var BusTrip = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "BusTrip";
};
BusTrip = stjs.extend(BusTrip, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/provider
     *  The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     * 
     *  @property provider
     *  @type Person
     */
    provider = null;
    /**
     *  Schema.org/busName
     *  The name of the bus (e.g. Bolt Express).
     * 
     *  @property busName
     *  @type Text
     */
    busName = null;
    /**
     *  Schema.org/departureBusStop
     *  The stop or station from which the bus departs.
     * 
     *  @property departureBusStop
     *  @type BusStop
     */
    departureBusStop = null;
    /**
     *  Schema.org/arrivalBusStop
     *  The stop or station from which the bus arrives.
     * 
     *  @property arrivalBusStop
     *  @type BusStation
     */
    arrivalBusStop = null;
    /**
     *  Schema.org/arrivalTime
     *  The expected arrival time.
     * 
     *  @property arrivalTime
     *  @type DateTime
     */
    arrivalTime = null;
    /**
     *  Schema.org/busNumber
     *  The unique identifier for the bus.
     * 
     *  @property busNumber
     *  @type Text
     */
    busNumber = null;
    /**
     *  Schema.org/departureTime
     *  The expected departure time.
     * 
     *  @property departureTime
     *  @type DateTime
     */
    departureTime = null;
}, {provider: "Person", departureBusStop: "BusStop", arrivalBusStop: "BusStation", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
