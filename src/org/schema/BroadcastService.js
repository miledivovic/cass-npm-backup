/**
 *  Schema.org/BroadcastService
 *  A delivery service through which content is provided via broadcast over the air or online.
 * 
 *  @author schema.org
 *  @class BroadcastService
 *  @module org.schema
 *  @extends Service
 */
var BroadcastService = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Service.call(this);
    this.context = "http://schema.org/";
    this.type = "BroadcastService";
};
BroadcastService = stjs.extend(BroadcastService, Service, [], function(constructor, prototype) {
    /**
     *  Schema.org/broadcastTimezone
     *  The timezone in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) for which the service bases its broadcasts
     * 
     *  @property broadcastTimezone
     *  @type Text
     */
    prototype.broadcastTimezone = null;
    /**
     *  Schema.org/videoFormat
     *  The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).
     * 
     *  @property videoFormat
     *  @type Text
     */
    prototype.videoFormat = null;
    /**
     *  Schema.org/broadcastAffiliateOf
     *  The media network(s) whose content is broadcast on this station.
     * 
     *  @property broadcastAffiliateOf
     *  @type Organization
     */
    prototype.broadcastAffiliateOf = null;
    /**
     *  Schema.org/parentService
     *  A broadcast service to which the broadcast service may belong to such as regional variations of a national channel.
     * 
     *  @property parentService
     *  @type BroadcastService
     */
    prototype.parentService = null;
    /**
     *  Schema.org/broadcastDisplayName
     *  The name displayed in the channel guide. For many US affiliates, it is the network name.
     * 
     *  @property broadcastDisplayName
     *  @type Text
     */
    prototype.broadcastDisplayName = null;
    /**
     *  Schema.org/area
     *  The area within which users can expect to reach the broadcast service.
     * 
     *  @property area
     *  @type Place
     */
    prototype.area = null;
    /**
     *  Schema.org/broadcaster
     *  The organization owning or operating the broadcast service.
     * 
     *  @property broadcaster
     *  @type Organization
     */
    prototype.broadcaster = null;
}, {broadcastAffiliateOf: "Organization", parentService: "BroadcastService", area: "Place", broadcaster: "Organization", serviceAudience: "Audience", serviceArea: "GeoShape", provider: "Person", audience: "Audience", hasOfferCatalog: "OfferCatalog", hoursAvailable: "OpeningHoursSpecification", aggregateRating: "AggregateRating", offers: "Offer", broker: "Person", serviceOutput: "Thing", logo: "ImageObject", isSimilarTo: "Product", isRelatedTo: "Product", availableChannel: "ServiceChannel", review: "Review", produces: "Thing", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
