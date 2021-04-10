/**
 *  Schema.org/Airport
 *  An airport.
 * 
 *  @author schema.org
 *  @class Airport
 *  @module org.schema
 *  @extends CivicStructure
 */
var Airport = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CivicStructure.call(this);
    this.context = "http://schema.org/";
    this.type = "Airport";
};
Airport = stjs.extend(Airport, CivicStructure, [], function(constructor, prototype) {
    /**
     *  Schema.org/iataCode
     *  IATA identifier for an airline or airport.
     * 
     *  @property iataCode
     *  @type Text
     */
    iataCode = null;
    /**
     *  Schema.org/icaoCode
     *  ICAO identifier for an airport.
     * 
     *  @property icaoCode
     *  @type Text
     */
    icaoCode = null;
}, {photo: "ImageObject", address: "PostalAddress", openingHoursSpecification: "OpeningHoursSpecification", containedInPlace: "Place", reviews: "Review", aggregateRating: "AggregateRating", photos: "Photograph", hasMap: "SchemaMap", additionalProperty: "PropertyValue", events: "SchemaEvent", specialOpeningHoursSpecification: "OpeningHoursSpecification", amenityFeature: "LocationFeatureSpecification", logo: "ImageObject", geo: "GeoCoordinates", review: "Review", event: "SchemaEvent", containsPlace: "Place", containedIn: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
