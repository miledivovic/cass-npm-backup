/**
 *  Schema.org/SportsOrganization
 *  Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations.
 * 
 *  @author schema.org
 *  @class SportsOrganization
 *  @module org.schema
 *  @extends Organization
 */
var SportsOrganization = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Organization.call(this);
    this.context = "http://schema.org/";
    this.type = "SportsOrganization";
};
SportsOrganization = stjs.extend(SportsOrganization, Organization, [], function(constructor, prototype) {
    /**
     *  Schema.org/sport
     *  A type of sport (e.g. Baseball).
     * 
     *  @property sport
     *  @type Text
     */
    sport = null;
}, {serviceArea: "GeoShape", address: "PostalAddress", funder: "Person", memberOf: "Organization", subOrganization: "Organization", hasOfferCatalog: "OfferCatalog", reviews: "Review", members: "Organization", aggregateRating: "AggregateRating", makesOffer: "Offer", contactPoints: "ContactPoint", seeks: "Demand", member: "Organization", founders: "Person", alumni: "Person", events: "SchemaEvent", logo: "ImageObject", employees: "Person", department: "Organization", contactPoint: "ContactPoint", parentOrganization: "Organization", employee: "Person", numberOfEmployees: "QuantitativeValue", hasPOS: "Place", review: "Review", foundingLocation: "Place", owns: "OwnershipInfo", event: "SchemaEvent", founder: "Person", sponsor: "Organization", location: "PostalAddress", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
