/**
 *  Schema.org/TrainTrip
 *  A trip on a commercial train line.
 * 
 *  @author schema.org
 *  @class TrainTrip
 *  @module org.schema
 *  @extends Intangible
 */
var TrainTrip = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "TrainTrip";
};
TrainTrip = stjs.extend(TrainTrip, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/departureStation
     *  The station from which the train departs.
     * 
     *  @property departureStation
     *  @type TrainStation
     */
    prototype.departureStation = null;
    /**
     *  Schema.org/provider
     *  The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     * 
     *  @property provider
     *  @type Person
     */
    prototype.provider = null;
    /**
     *  Schema.org/arrivalPlatform
     *  The platform where the train arrives.
     * 
     *  @property arrivalPlatform
     *  @type Text
     */
    prototype.arrivalPlatform = null;
    /**
     *  Schema.org/departurePlatform
     *  The platform from which the train departs.
     * 
     *  @property departurePlatform
     *  @type Text
     */
    prototype.departurePlatform = null;
    /**
     *  Schema.org/trainName
     *  The name of the train (e.g. The Orient Express).
     * 
     *  @property trainName
     *  @type Text
     */
    prototype.trainName = null;
    /**
     *  Schema.org/trainNumber
     *  The unique identifier for the train.
     * 
     *  @property trainNumber
     *  @type Text
     */
    prototype.trainNumber = null;
    /**
     *  Schema.org/arrivalStation
     *  The station where the train trip ends.
     * 
     *  @property arrivalStation
     *  @type TrainStation
     */
    prototype.arrivalStation = null;
    /**
     *  Schema.org/arrivalTime
     *  The expected arrival time.
     * 
     *  @property arrivalTime
     *  @type DateTime
     */
    prototype.arrivalTime = null;
    /**
     *  Schema.org/departureTime
     *  The expected departure time.
     * 
     *  @property departureTime
     *  @type DateTime
     */
    prototype.departureTime = null;
}, {departureStation: "TrainStation", provider: "Person", arrivalStation: "TrainStation", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
