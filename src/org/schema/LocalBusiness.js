/**
 *  Schema.org/LocalBusiness
 *  A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc.
 * 
 *  @author schema.org
 *  @class LocalBusiness
 *  @module org.schema
 *  @extends Organization
 */
var LocalBusiness = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Organization.call(this);
    this.context = "http://schema.org/";
    this.type = "LocalBusiness";
};
LocalBusiness = stjs.extend(LocalBusiness, Organization, [], function(constructor, prototype) {
    /**
     *  Schema.org/priceRange
     *  The price range of the business, for example ```$$$```.
     * 
     *  @property priceRange
     *  @type Text
     */
    prototype.priceRange = null;
    /**
     *  Schema.org/branchOf
     *  The larger organization that this local business is a branch of, if any. Not to be confused with (anatomical)[[branch]].
     * 
     *  @property branchOf
     *  @type Organization
     */
    prototype.branchOf = null;
    /**
     *  Schema.org/paymentAccepted
     *  Cash, credit card, etc.
     * 
     *  @property paymentAccepted
     *  @type Text
     */
    prototype.paymentAccepted = null;
    /**
     *  Schema.org/openingHours
     *  The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.\n\n* Days are specified using the following two-letter combinations: ```Mo```, ```Tu```, ```We```, ```Th```, ```Fr```, ```Sa```, ```Su```.\n* Times are specified using 24:00 time. For example, 3pm is specified as ```15:00```. \n* Here is an example: <code>&lt;time itemprop="openingHours" datetime=&quot;Tu,Th 16:00-20:00&quot;&gt;Tuesdays and Thursdays 4-8pm&lt;/time&gt;</code>.\n* If a business is open 7 days a week, then it can be specified as <code>&lt;time itemprop=&quot;openingHours&quot; datetime=&quot;Mo-Su&quot;&gt;Monday through Sunday, all day&lt;/time&gt;</code>.
     * 
     *  @property openingHours
     *  @type Text
     */
    prototype.openingHours = null;
    /**
     *  Schema.org/currenciesAccepted
     *  The currency accepted (in [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217)).
     * 
     *  @property currenciesAccepted
     *  @type Text
     */
    prototype.currenciesAccepted = null;
}, {branchOf: "Organization", serviceArea: "GeoShape", address: "PostalAddress", funder: "Person", memberOf: "Organization", subOrganization: "Organization", hasOfferCatalog: "OfferCatalog", reviews: "Review", members: "Organization", aggregateRating: "AggregateRating", makesOffer: "Offer", contactPoints: "ContactPoint", seeks: "Demand", member: "Organization", founders: "Person", alumni: "Person", events: "SchemaEvent", logo: "ImageObject", employees: "Person", department: "Organization", contactPoint: "ContactPoint", parentOrganization: "Organization", employee: "Person", numberOfEmployees: "QuantitativeValue", hasPOS: "Place", review: "Review", foundingLocation: "Place", owns: "OwnershipInfo", event: "SchemaEvent", founder: "Person", sponsor: "Organization", location: "PostalAddress", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
