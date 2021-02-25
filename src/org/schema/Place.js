/**
 *  Schema.org/Place
 *  Entities that have a somewhat fixed, physical extension.
 * 
 *  @author schema.org
 *  @class Place
 *  @module org.schema
 *  @extends Thing
 */
var Place = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Thing.call(this);
    this.context = "http://schema.org/";
    this.type = "Place";
};
Place = stjs.extend(Place, Thing, [], function(constructor, prototype) {
    /**
     *  Schema.org/photo
     *  A photograph of this place.
     * 
     *  @property photo
     *  @type ImageObject
     */
    prototype.photo = null;
    /**
     *  Schema.org/address
     *  Physical address of the item.
     * 
     *  @property address
     *  @type PostalAddress
     */
    prototype.address = null;
    /**
     *  Schema.org/openingHoursSpecification
     *  The opening hours of a certain place.
     * 
     *  @property openingHoursSpecification
     *  @type OpeningHoursSpecification
     */
    prototype.openingHoursSpecification = null;
    /**
     *  Schema.org/containedInPlace
     *  The basic containment relation between a place and one that contains it.
     * 
     *  @property containedInPlace
     *  @type Place
     */
    prototype.containedInPlace = null;
    /**
     *  Schema.org/smokingAllowed
     *  Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room.
     * 
     *  @property smokingAllowed
     *  @type Boolean
     */
    prototype.smokingAllowed = null;
    /**
     *  Schema.org/globalLocationNumber
     *  The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
     * 
     *  @property globalLocationNumber
     *  @type Text
     */
    prototype.globalLocationNumber = null;
    /**
     *  Schema.org/maximumAttendeeCapacity
     *  The total number of individuals that may attend an event or venue.
     * 
     *  @property maximumAttendeeCapacity
     *  @type Integer
     */
    prototype.maximumAttendeeCapacity = null;
    /**
     *  Schema.org/reviews
     *  Review of the item.
     * 
     *  @property reviews
     *  @type Review
     */
    prototype.reviews = null;
    /**
     *  Schema.org/aggregateRating
     *  The overall rating, based on a collection of reviews or ratings, of the item.
     * 
     *  @property aggregateRating
     *  @type AggregateRating
     */
    prototype.aggregateRating = null;
    /**
     *  Schema.org/photos
     *  Photographs of this place.
     * 
     *  @property photos
     *  @type Photograph
     */
    prototype.photos = null;
    /**
     *  Schema.org/map
     *  A URL to a map of the place.
     * 
     *  @property map
     *  @type URL
     */
    prototype.map = null;
    /**
     *  Schema.org/branchCode
     *  A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.\n\nFor example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code "3047" is a branchCode for a particular branch.
     * 
     *  @property branchCode
     *  @type Text
     */
    prototype.branchCode = null;
    /**
     *  Schema.org/hasMap
     *  A URL to a map of the place.
     * 
     *  @property hasMap
     *  @type Object
     */
    prototype.hasMap = null;
    /**
     *  Schema.org/additionalProperty
     *  A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. schema:width, schema:color, schema:gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     * 
     *  @property additionalProperty
     *  @type PropertyValue
     */
    prototype.additionalProperty = null;
    /**
     *  Schema.org/events
     *  Upcoming or past events associated with this place or organization.
     * 
     *  @property events
     *  @type SchemaEvent
     */
    prototype.events = null;
    /**
     *  Schema.org/specialOpeningHoursSpecification
     *  The special opening hours of a certain place.\n\nUse this to explicitly override general opening hours brought in scope by [[openingHoursSpecification]] or [[openingHours]].
     * 
     *  @property specialOpeningHoursSpecification
     *  @type OpeningHoursSpecification
     */
    prototype.specialOpeningHoursSpecification = null;
    /**
     *  Schema.org/amenityFeature
     *  An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
     * 
     *  @property amenityFeature
     *  @type LocationFeatureSpecification
     */
    prototype.amenityFeature = null;
    /**
     *  Schema.org/logo
     *  An associated logo.
     * 
     *  @property logo
     *  @type ImageObject
     */
    prototype.logo = null;
    /**
     *  Schema.org/telephone
     *  The telephone number.
     * 
     *  @property telephone
     *  @type Text
     */
    prototype.telephone = null;
    /**
     *  Schema.org/geo
     *  The geo coordinates of the place.
     * 
     *  @property geo
     *  @type GeoCoordinates
     */
    prototype.geo = null;
    /**
     *  Schema.org/review
     *  A review of the item.
     * 
     *  @property review
     *  @type Review
     */
    prototype.review = null;
    /**
     *  Schema.org/event
     *  Upcoming or past event associated with this place, organization, or action.
     * 
     *  @property event
     *  @type SchemaEvent
     */
    prototype.event = null;
    /**
     *  Schema.org/containsPlace
     *  The basic containment relation between a place and another that it contains.
     * 
     *  @property containsPlace
     *  @type Place
     */
    prototype.containsPlace = null;
    /**
     *  Schema.org/isicV4
     *  The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
     * 
     *  @property isicV4
     *  @type Text
     */
    prototype.isicV4 = null;
    /**
     *  Schema.org/maps
     *  A URL to a map of the place.
     * 
     *  @property maps
     *  @type URL
     */
    prototype.maps = null;
    /**
     *  Schema.org/faxNumber
     *  The fax number.
     * 
     *  @property faxNumber
     *  @type Text
     */
    prototype.faxNumber = null;
    /**
     *  Schema.org/containedIn
     *  The basic containment relation between a place and one that contains it.
     * 
     *  @property containedIn
     *  @type Place
     */
    prototype.containedIn = null;
}, {photo: "ImageObject", address: "PostalAddress", openingHoursSpecification: "OpeningHoursSpecification", containedInPlace: "Place", reviews: "Review", aggregateRating: "AggregateRating", photos: "Photograph", hasMap: "SchemaMap", additionalProperty: "PropertyValue", events: "SchemaEvent", specialOpeningHoursSpecification: "OpeningHoursSpecification", amenityFeature: "LocationFeatureSpecification", logo: "ImageObject", geo: "GeoCoordinates", review: "Review", event: "SchemaEvent", containsPlace: "Place", containedIn: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
