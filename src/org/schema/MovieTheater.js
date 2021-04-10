/**
 *  Schema.org/MovieTheater
 *  A movie theater.
 * 
 *  @author schema.org
 *  @class MovieTheater
 *  @module org.schema
 *  @extends CivicStructure
 */
var MovieTheater = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CivicStructure.call(this);
    this.context = "http://schema.org/";
    this.type = "MovieTheater";
};
MovieTheater = stjs.extend(MovieTheater, CivicStructure, [], function(constructor, prototype) {
    /**
     *  Schema.org/screenCount
     *  The number of screens in the movie theater.
     * 
     *  @property screenCount
     *  @type Number
     */
    screenCount = null;
}, {photo: "ImageObject", address: "PostalAddress", openingHoursSpecification: "OpeningHoursSpecification", containedInPlace: "Place", reviews: "Review", aggregateRating: "AggregateRating", photos: "Photograph", hasMap: "SchemaMap", additionalProperty: "PropertyValue", events: "SchemaEvent", specialOpeningHoursSpecification: "OpeningHoursSpecification", amenityFeature: "LocationFeatureSpecification", logo: "ImageObject", geo: "GeoCoordinates", review: "Review", event: "SchemaEvent", containsPlace: "Place", containedIn: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
