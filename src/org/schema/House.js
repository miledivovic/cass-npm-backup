/**
 *  Schema.org/House
 *  A house is a building or structure that has the ability to be occupied for habitation by humans or other creatures (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/House">http://en.wikipedia.org/wiki/House</a>).
 * 
 *  @author schema.org
 *  @class House
 *  @module org.schema
 *  @extends Accommodation
 */
var House = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Accommodation.call(this);
    this.context = "http://schema.org/";
    this.type = "House";
};
House = stjs.extend(House, Accommodation, [], function(constructor, prototype) {
    /**
     *  Schema.org/numberOfRooms
     *  The number of rooms (excluding bathrooms and closets) of the acccommodation or lodging business.
     *  Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
     * 
     *  @property numberOfRooms
     *  @type Number
     */
    numberOfRooms = null;
}, {floorSize: "QuantitativeValue", amenityFeature: "LocationFeatureSpecification", photo: "ImageObject", address: "PostalAddress", openingHoursSpecification: "OpeningHoursSpecification", containedInPlace: "Place", reviews: "Review", aggregateRating: "AggregateRating", photos: "Photograph", hasMap: "SchemaMap", additionalProperty: "PropertyValue", events: "SchemaEvent", specialOpeningHoursSpecification: "OpeningHoursSpecification", amenityFeature: "LocationFeatureSpecification", logo: "ImageObject", geo: "GeoCoordinates", review: "Review", event: "SchemaEvent", containsPlace: "Place", containedIn: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
