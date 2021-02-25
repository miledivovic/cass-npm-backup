/**
 *  Schema.org/LodgingBusiness
 *  A lodging business, such as a motel, hotel, or inn.
 * 
 *  @author schema.org
 *  @class LodgingBusiness
 *  @module org.schema
 *  @extends LocalBusiness
 */
var LodgingBusiness = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    LocalBusiness.call(this);
    this.context = "http://schema.org/";
    this.type = "LodgingBusiness";
};
LodgingBusiness = stjs.extend(LodgingBusiness, LocalBusiness, [], function(constructor, prototype) {
    /**
     *  Schema.org/audience
     *  An intended audience, i.e. a group for whom something was created.
     * 
     *  @property audience
     *  @type Audience
     */
    prototype.audience = null;
    /**
     *  Schema.org/checkinTime
     *  The earliest someone may check into a lodging establishment.
     * 
     *  @property checkinTime
     *  @type DateTime
     */
    prototype.checkinTime = null;
    /**
     *  Schema.org/petsAllowed
     *  Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value.
     * 
     *  @property petsAllowed
     *  @type Boolean
     */
    prototype.petsAllowed = null;
    /**
     *  Schema.org/availableLanguage
     *  A language someone may use with the item. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]
     * 
     *  @property availableLanguage
     *  @type Language
     */
    prototype.availableLanguage = null;
    /**
     *  Schema.org/amenityFeature
     *  An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
     * 
     *  @property amenityFeature
     *  @type LocationFeatureSpecification
     */
    prototype.amenityFeature = null;
    /**
     *  Schema.org/starRating
     *  An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars).
     * 
     *  @property starRating
     *  @type Rating
     */
    prototype.starRating = null;
    /**
     *  Schema.org/checkoutTime
     *  The latest someone may check out of a lodging establishment.
     * 
     *  @property checkoutTime
     *  @type DateTime
     */
    prototype.checkoutTime = null;
}, {audience: "Audience", availableLanguage: "Language", amenityFeature: "LocationFeatureSpecification", starRating: "Rating", branchOf: "Organization", serviceArea: "GeoShape", address: "PostalAddress", funder: "Person", memberOf: "Organization", subOrganization: "Organization", hasOfferCatalog: "OfferCatalog", reviews: "Review", members: "Organization", aggregateRating: "AggregateRating", makesOffer: "Offer", contactPoints: "ContactPoint", seeks: "Demand", member: "Organization", founders: "Person", alumni: "Person", events: "SchemaEvent", logo: "ImageObject", employees: "Person", department: "Organization", contactPoint: "ContactPoint", parentOrganization: "Organization", employee: "Person", numberOfEmployees: "QuantitativeValue", hasPOS: "Place", review: "Review", foundingLocation: "Place", owns: "OwnershipInfo", event: "SchemaEvent", founder: "Person", sponsor: "Organization", location: "PostalAddress", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
