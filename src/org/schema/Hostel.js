/**
 *  Schema.org/Hostel
 *  A hostel - cheap accommodation, often in shared dormitories.
 *  <br /><br />
 *  See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 * 
 *  @author schema.org
 *  @class Hostel
 *  @module org.schema
 *  @extends LodgingBusiness
 */
var Hostel = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    LodgingBusiness.call(this);
    this.context = "http://schema.org/";
    this.type = "Hostel";
};
Hostel = stjs.extend(Hostel, LodgingBusiness, [], null, {audience: "Audience", availableLanguage: "Language", amenityFeature: "LocationFeatureSpecification", starRating: "Rating", branchOf: "Organization", serviceArea: "GeoShape", address: "PostalAddress", funder: "Person", memberOf: "Organization", subOrganization: "Organization", hasOfferCatalog: "OfferCatalog", reviews: "Review", members: "Organization", aggregateRating: "AggregateRating", makesOffer: "Offer", contactPoints: "ContactPoint", seeks: "Demand", member: "Organization", founders: "Person", alumni: "Person", events: "SchemaEvent", logo: "ImageObject", employees: "Person", department: "Organization", contactPoint: "ContactPoint", parentOrganization: "Organization", employee: "Person", numberOfEmployees: "QuantitativeValue", hasPOS: "Place", review: "Review", foundingLocation: "Place", owns: "OwnershipInfo", event: "SchemaEvent", founder: "Person", sponsor: "Organization", location: "PostalAddress", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
