/**
 *  Schema.org/SportsTeam
 *  Organization: Sports team.
 * 
 *  @author schema.org
 *  @class SportsTeam
 *  @module org.schema
 *  @extends SportsOrganization
 */
var SportsTeam = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    SportsOrganization.call(this);
    this.context = "http://schema.org/";
    this.type = "SportsTeam";
};
SportsTeam = stjs.extend(SportsTeam, SportsOrganization, [], function(constructor, prototype) {
    /**
     *  Schema.org/athlete
     *  A person that acts as performing member of a sports team; a player as opposed to a coach.
     * 
     *  @property athlete
     *  @type Person
     */
    athlete = null;
    /**
     *  Schema.org/coach
     *  A person that acts in a coaching role for a sports team.
     * 
     *  @property coach
     *  @type Person
     */
    coach = null;
}, {athlete: "Person", coach: "Person", serviceArea: "GeoShape", address: "PostalAddress", funder: "Person", memberOf: "Organization", subOrganization: "Organization", hasOfferCatalog: "OfferCatalog", reviews: "Review", members: "Organization", aggregateRating: "AggregateRating", makesOffer: "Offer", contactPoints: "ContactPoint", seeks: "Demand", member: "Organization", founders: "Person", alumni: "Person", events: "SchemaEvent", logo: "ImageObject", employees: "Person", department: "Organization", contactPoint: "ContactPoint", parentOrganization: "Organization", employee: "Person", numberOfEmployees: "QuantitativeValue", hasPOS: "Place", review: "Review", foundingLocation: "Place", owns: "OwnershipInfo", event: "SchemaEvent", founder: "Person", sponsor: "Organization", location: "PostalAddress", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
