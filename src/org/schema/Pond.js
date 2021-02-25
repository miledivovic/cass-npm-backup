/**
 *  Schema.org/Pond
 *  A pond.
 * 
 *  @author schema.org
 *  @class Pond
 *  @module org.schema
 *  @extends BodyOfWater
 */
var Pond = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    BodyOfWater.call(this);
    this.context = "http://schema.org/";
    this.type = "Pond";
};
Pond = stjs.extend(Pond, BodyOfWater, [], null, {photo: "ImageObject", address: "PostalAddress", openingHoursSpecification: "OpeningHoursSpecification", containedInPlace: "Place", reviews: "Review", aggregateRating: "AggregateRating", photos: "Photograph", hasMap: "SchemaMap", additionalProperty: "PropertyValue", events: "SchemaEvent", specialOpeningHoursSpecification: "OpeningHoursSpecification", amenityFeature: "LocationFeatureSpecification", logo: "ImageObject", geo: "GeoCoordinates", review: "Review", event: "SchemaEvent", containsPlace: "Place", containedIn: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
