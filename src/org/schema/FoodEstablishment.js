/**
 *  Schema.org/FoodEstablishment
 *  A food-related business.
 * 
 *  @author schema.org
 *  @class FoodEstablishment
 *  @module org.schema
 *  @extends LocalBusiness
 */
var FoodEstablishment = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    LocalBusiness.call(this);
    this.context = "http://schema.org/";
    this.type = "FoodEstablishment";
};
FoodEstablishment = stjs.extend(FoodEstablishment, LocalBusiness, [], function(constructor, prototype) {
    /**
     *  Schema.org/servesCuisine
     *  The cuisine of the restaurant.
     * 
     *  @property servesCuisine
     *  @type Text
     */
    servesCuisine = null;
    /**
     *  Schema.org/hasMenu
     *  Either the actual menu as a structured representation, as text, or a URL of the menu.
     * 
     *  @property hasMenu
     *  @type URL
     */
    hasMenu = null;
    /**
     *  Schema.org/menu
     *  Either the actual menu as a structured representation, as text, or a URL of the menu.
     * 
     *  @property menu
     *  @type Menu
     */
    menu = null;
    /**
     *  Schema.org/starRating
     *  An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars).
     * 
     *  @property starRating
     *  @type Rating
     */
    starRating = null;
    /**
     *  Schema.org/acceptsReservations
     *  Indicates whether a FoodEstablishment accepts reservations. Values can be Boolean, an URL at which reservations can be made or (for backwards compatibility) the strings ```Yes``` or ```No```.
     * 
     *  @property acceptsReservations
     *  @type URL
     */
    acceptsReservations = null;
}, {menu: "Menu", starRating: "Rating", branchOf: "Organization", serviceArea: "GeoShape", address: "PostalAddress", funder: "Person", memberOf: "Organization", subOrganization: "Organization", hasOfferCatalog: "OfferCatalog", reviews: "Review", members: "Organization", aggregateRating: "AggregateRating", makesOffer: "Offer", contactPoints: "ContactPoint", seeks: "Demand", member: "Organization", founders: "Person", alumni: "Person", events: "SchemaEvent", logo: "ImageObject", employees: "Person", department: "Organization", contactPoint: "ContactPoint", parentOrganization: "Organization", employee: "Person", numberOfEmployees: "QuantitativeValue", hasPOS: "Place", review: "Review", foundingLocation: "Place", owns: "OwnershipInfo", event: "SchemaEvent", founder: "Person", sponsor: "Organization", location: "PostalAddress", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
