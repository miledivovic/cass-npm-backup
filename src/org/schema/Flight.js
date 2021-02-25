/**
 *  Schema.org/Flight
 *  An airline flight.
 * 
 *  @author schema.org
 *  @class Flight
 *  @module org.schema
 *  @extends Intangible
 */
var Flight = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "Flight";
};
Flight = stjs.extend(Flight, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/arrivalAirport
     *  The airport where the flight terminates.
     * 
     *  @property arrivalAirport
     *  @type Airport
     */
    prototype.arrivalAirport = null;
    /**
     *  Schema.org/provider
     *  The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     * 
     *  @property provider
     *  @type Person
     */
    prototype.provider = null;
    /**
     *  Schema.org/arrivalGate
     *  Identifier of the flight's arrival gate.
     * 
     *  @property arrivalGate
     *  @type Text
     */
    prototype.arrivalGate = null;
    /**
     *  Schema.org/flightNumber
     *  The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is 'UA', the flightNumber is 'UA110'.
     * 
     *  @property flightNumber
     *  @type Text
     */
    prototype.flightNumber = null;
    /**
     *  Schema.org/carrier
     *  'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
     * 
     *  @property carrier
     *  @type Organization
     */
    prototype.carrier = null;
    /**
     *  Schema.org/departureAirport
     *  The airport where the flight originates.
     * 
     *  @property departureAirport
     *  @type Airport
     */
    prototype.departureAirport = null;
    /**
     *  Schema.org/boardingPolicy
     *  The type of boarding policy used by the airline (e.g. zone-based or group-based).
     * 
     *  @property boardingPolicy
     *  @type BoardingPolicyType
     */
    prototype.boardingPolicy = null;
    /**
     *  Schema.org/aircraft
     *  The kind of aircraft (e.g., "Boeing 747").
     * 
     *  @property aircraft
     *  @type Vehicle
     */
    prototype.aircraft = null;
    /**
     *  Schema.org/arrivalTime
     *  The expected arrival time.
     * 
     *  @property arrivalTime
     *  @type DateTime
     */
    prototype.arrivalTime = null;
    /**
     *  Schema.org/seller
     *  An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
     * 
     *  @property seller
     *  @type Person
     */
    prototype.seller = null;
    /**
     *  Schema.org/webCheckinTime
     *  The time when a passenger can check into the flight online.
     * 
     *  @property webCheckinTime
     *  @type DateTime
     */
    prototype.webCheckinTime = null;
    /**
     *  Schema.org/mealService
     *  Description of the meals that will be provided or available for purchase.
     * 
     *  @property mealService
     *  @type Text
     */
    prototype.mealService = null;
    /**
     *  Schema.org/departureGate
     *  Identifier of the flight's departure gate.
     * 
     *  @property departureGate
     *  @type Text
     */
    prototype.departureGate = null;
    /**
     *  Schema.org/departureTerminal
     *  Identifier of the flight's departure terminal.
     * 
     *  @property departureTerminal
     *  @type Text
     */
    prototype.departureTerminal = null;
    /**
     *  Schema.org/estimatedFlightDuration
     *  The estimated time the flight will take.
     * 
     *  @property estimatedFlightDuration
     *  @type Text
     */
    prototype.estimatedFlightDuration = null;
    /**
     *  Schema.org/flightDistance
     *  The distance of the flight.
     * 
     *  @property flightDistance
     *  @type Distance
     */
    prototype.flightDistance = null;
    /**
     *  Schema.org/arrivalTerminal
     *  Identifier of the flight's arrival terminal.
     * 
     *  @property arrivalTerminal
     *  @type Text
     */
    prototype.arrivalTerminal = null;
    /**
     *  Schema.org/departureTime
     *  The expected departure time.
     * 
     *  @property departureTime
     *  @type DateTime
     */
    prototype.departureTime = null;
}, {arrivalAirport: "Airport", provider: "Person", carrier: "Organization", departureAirport: "Airport", boardingPolicy: "BoardingPolicyType", aircraft: "Vehicle", seller: "Person", flightDistance: "Distance", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
