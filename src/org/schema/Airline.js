/**
 *  Schema.org/Airline
 *  An organization that provides flights for passengers.
 * 
 *  @author schema.org
 *  @class Airline
 *  @module org.schema
 *  @extends Organization
 */
var Airline = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Organization.call(this);
    this.context = "http://schema.org/";
    this.type = "Airline";
};
Airline = stjs.extend(Airline, Organization, [], function(constructor, prototype) {
    /**
     *  Schema.org/iataCode
     *  IATA identifier for an airline or airport.
     * 
     *  @property iataCode
     *  @type Text
     */
    iataCode = null;
    /**
     *  Schema.org/boardingPolicy
     *  The type of boarding policy used by the airline (e.g. zone-based or group-based).
     * 
     *  @property boardingPolicy
     *  @type BoardingPolicyType
     */
    boardingPolicy = null;
}, {boardingPolicy: "BoardingPolicyType", serviceArea: "GeoShape", address: "PostalAddress", funder: "Person", memberOf: "Organization", subOrganization: "Organization", hasOfferCatalog: "OfferCatalog", reviews: "Review", members: "Organization", aggregateRating: "AggregateRating", makesOffer: "Offer", contactPoints: "ContactPoint", seeks: "Demand", member: "Organization", founders: "Person", alumni: "Person", events: "SchemaEvent", logo: "ImageObject", employees: "Person", department: "Organization", contactPoint: "ContactPoint", parentOrganization: "Organization", employee: "Person", numberOfEmployees: "QuantitativeValue", hasPOS: "Place", review: "Review", foundingLocation: "Place", owns: "OwnershipInfo", event: "SchemaEvent", founder: "Person", sponsor: "Organization", location: "PostalAddress", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
