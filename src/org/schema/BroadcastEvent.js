/**
 *  Schema.org/BroadcastEvent
 *  An over the air or online broadcast event.
 * 
 *  @author schema.org
 *  @class BroadcastEvent
 *  @module org.schema
 *  @extends PublicationEvent
 */
var BroadcastEvent = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    PublicationEvent.call(this);
    this.context = "http://schema.org/";
    this.type = "BroadcastEvent";
};
BroadcastEvent = stjs.extend(BroadcastEvent, PublicationEvent, [], function(constructor, prototype) {
    /**
     *  Schema.org/videoFormat
     *  The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).
     * 
     *  @property videoFormat
     *  @type Text
     */
    videoFormat = null;
    /**
     *  Schema.org/isLiveBroadcast
     *  True is the broadcast is of a live event.
     * 
     *  @property isLiveBroadcast
     *  @type Boolean
     */
    isLiveBroadcast = null;
    /**
     *  Schema.org/broadcastOfEvent
     *  The event being broadcast such as a sporting event or awards ceremony.
     * 
     *  @property broadcastOfEvent
     *  @type SchemaEvent
     */
    broadcastOfEvent = null;
}, {broadcastOfEvent: "SchemaEvent", publishedOn: "BroadcastService", about: "Thing", funder: "Person", workFeatured: "CreativeWork", audience: "Audience", actor: "Person", performers: "Organization", contributor: "Organization", organizer: "Person", attendees: "Person", aggregateRating: "AggregateRating", subEvent: "SchemaEvent", subEvents: "SchemaEvent", offers: "Offer", attendee: "Organization", workPerformed: "CreativeWork", eventStatus: "EventStatusType", director: "Person", superEvent: "SchemaEvent", duration: "Duration", translator: "Person", inLanguage: "Language", review: "Review", sponsor: "Organization", location: "PostalAddress", recordedIn: "CreativeWork", composer: "Organization", performer: "Person", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
