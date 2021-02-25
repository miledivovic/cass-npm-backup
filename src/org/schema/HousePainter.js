/**
 *  Schema.org/HousePainter
 *  A house painting service.
 * 
 *  @author schema.org
 *  @class HousePainter
 *  @module org.schema
 *  @extends HomeAndConstructionBusiness
 */
var HousePainter = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    HomeAndConstructionBusiness.call(this);
    this.context = "http://schema.org/";
    this.type = "HousePainter";
};
HousePainter = stjs.extend(HousePainter, HomeAndConstructionBusiness, [], null, {branchOf: "Organization", serviceArea: "GeoShape", address: "PostalAddress", funder: "Person", memberOf: "Organization", subOrganization: "Organization", hasOfferCatalog: "OfferCatalog", reviews: "Review", members: "Organization", aggregateRating: "AggregateRating", makesOffer: "Offer", contactPoints: "ContactPoint", seeks: "Demand", member: "Organization", founders: "Person", alumni: "Person", events: "SchemaEvent", logo: "ImageObject", employees: "Person", department: "Organization", contactPoint: "ContactPoint", parentOrganization: "Organization", employee: "Person", numberOfEmployees: "QuantitativeValue", hasPOS: "Place", review: "Review", foundingLocation: "Place", owns: "OwnershipInfo", event: "SchemaEvent", founder: "Person", sponsor: "Organization", location: "PostalAddress", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
