/**
 *  Schema.org/Accommodation
 *  An accommodation is a place that can accommodate human beings, e.g. a hotel room, a camping pitch, or a meeting room. Many accommodations are for overnight stays, but this is not a mandatory requirement.
 *  For more specific types of accommodations not defined in schema.org, one can use additionalType with external vocabularies.
 *  <br /><br />
 *  See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 * 
 *  @author schema.org
 *  @class Accommodation
 *  @module org.schema
 *  @extends Place
 */
var Accommodation = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Place.call(this);
    this.context = "http://schema.org/";
    this.type = "Accommodation";
};
Accommodation = stjs.extend(Accommodation, Place, [], function(constructor, prototype) {
    /**
     *  Schema.org/floorSize
     *  The size of the accommodation, e.g. in square meter or squarefoot.
     *  Typical unit code(s): MTK for square meter, FTK for square foot, or YDK for square yard
     * 
     *  @property floorSize
     *  @type QuantitativeValue
     */
    floorSize = null;
    /**
     *  Schema.org/petsAllowed
     *  Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value.
     * 
     *  @property petsAllowed
     *  @type Boolean
     */
    petsAllowed = null;
    /**
     *  Schema.org/amenityFeature
     *  An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
     * 
     *  @property amenityFeature
     *  @type LocationFeatureSpecification
     */
    amenityFeature = null;
    /**
     *  Schema.org/numberOfRooms
     *  The number of rooms (excluding bathrooms and closets) of the acccommodation or lodging business.
     *  Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
     * 
     *  @property numberOfRooms
     *  @type Number
     */
    numberOfRooms = null;
    /**
     *  Schema.org/permittedUsage
     *  Indications regarding the permitted usage of the accommodation.
     * 
     *  @property permittedUsage
     *  @type Text
     */
    permittedUsage = null;
}, {floorSize: "QuantitativeValue", amenityFeature: "LocationFeatureSpecification", photo: "ImageObject", address: "PostalAddress", openingHoursSpecification: "OpeningHoursSpecification", containedInPlace: "Place", reviews: "Review", aggregateRating: "AggregateRating", photos: "Photograph", hasMap: "SchemaMap", additionalProperty: "PropertyValue", events: "SchemaEvent", specialOpeningHoursSpecification: "OpeningHoursSpecification", amenityFeature: "LocationFeatureSpecification", logo: "ImageObject", geo: "GeoCoordinates", review: "Review", event: "SchemaEvent", containsPlace: "Place", containedIn: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
