/**
 *  Schema.org/OnDemandEvent
 *  A publication event e.g. catch-up TV or radio podcast, during which a program is available on-demand.
 * 
 *  @author schema.org
 *  @class OnDemandEvent
 *  @module org.schema
 *  @extends PublicationEvent
 */
var OnDemandEvent = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    PublicationEvent.call(this);
    this.context = "http://schema.org/";
    this.type = "OnDemandEvent";
};
OnDemandEvent = stjs.extend(OnDemandEvent, PublicationEvent, [], null, {publishedOn: "BroadcastService", about: "Thing", funder: "Person", workFeatured: "CreativeWork", audience: "Audience", actor: "Person", performers: "Organization", contributor: "Organization", organizer: "Person", attendees: "Person", aggregateRating: "AggregateRating", subEvent: "SchemaEvent", subEvents: "SchemaEvent", offers: "Offer", attendee: "Organization", workPerformed: "CreativeWork", eventStatus: "EventStatusType", director: "Person", superEvent: "SchemaEvent", duration: "Duration", translator: "Person", inLanguage: "Language", review: "Review", sponsor: "Organization", location: "PostalAddress", recordedIn: "CreativeWork", composer: "Organization", performer: "Person", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
