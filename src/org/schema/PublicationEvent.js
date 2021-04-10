/**
 *  Schema.org/PublicationEvent
 *  A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media.
 * 
 *  @author schema.org
 *  @class PublicationEvent
 *  @module org.schema
 *  @extends SchemaEvent
 */
var PublicationEvent = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    SchemaEvent.call(this);
    this.context = "http://schema.org/";
    this.type = "PublicationEvent";
};
PublicationEvent = stjs.extend(PublicationEvent, SchemaEvent, [], function(constructor, prototype) {
    /**
     *  Schema.org/publishedOn
     *  A broadcast service associated with the publication event.
     * 
     *  @property publishedOn
     *  @type BroadcastService
     */
    publishedOn = null;
    /**
     *  Schema.org/free
     *  A flag to signal that the publication or event is accessible for free.
     * 
     *  @property free
     *  @type Boolean
     */
    free = null;
    /**
     *  Schema.org/isAccessibleForFree
     *  A flag to signal that the publication is accessible for free.
     * 
     *  @property isAccessibleForFree
     *  @type Boolean
     */
    isAccessibleForFree = null;
}, {publishedOn: "BroadcastService", about: "Thing", funder: "Person", workFeatured: "CreativeWork", audience: "Audience", actor: "Person", performers: "Organization", contributor: "Organization", organizer: "Person", attendees: "Person", aggregateRating: "AggregateRating", subEvent: "SchemaEvent", subEvents: "SchemaEvent", offers: "Offer", attendee: "Organization", workPerformed: "CreativeWork", eventStatus: "EventStatusType", director: "Person", superEvent: "SchemaEvent", duration: "Duration", translator: "Person", inLanguage: "Language", review: "Review", sponsor: "Organization", location: "PostalAddress", recordedIn: "CreativeWork", composer: "Organization", performer: "Person", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
