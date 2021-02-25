/**
 *  Schema.org/SportsEvent
 *  SchemaEvent type: Sports event.
 * 
 *  @author schema.org
 *  @class SportsEvent
 *  @module org.schema
 *  @extends SchemaEvent
 */
var SportsEvent = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    SchemaEvent.call(this);
    this.context = "http://schema.org/";
    this.type = "SportsEvent";
};
SportsEvent = stjs.extend(SportsEvent, SchemaEvent, [], function(constructor, prototype) {
    /**
     *  Schema.org/awayTeam
     *  The away team in a sports event.
     * 
     *  @property awayTeam
     *  @type Person
     */
    prototype.awayTeam = null;
    /**
     *  Schema.org/homeTeam
     *  The home team in a sports event.
     * 
     *  @property homeTeam
     *  @type SportsTeam
     */
    prototype.homeTeam = null;
    /**
     *  Schema.org/competitor
     *  A competitor in a sports event.
     * 
     *  @property competitor
     *  @type Person
     */
    prototype.competitor = null;
}, {awayTeam: "Person", homeTeam: "SportsTeam", competitor: "Person", about: "Thing", funder: "Person", workFeatured: "CreativeWork", audience: "Audience", actor: "Person", performers: "Organization", contributor: "Organization", organizer: "Person", attendees: "Person", aggregateRating: "AggregateRating", subEvent: "SchemaEvent", subEvents: "SchemaEvent", offers: "Offer", attendee: "Organization", workPerformed: "CreativeWork", eventStatus: "EventStatusType", director: "Person", superEvent: "SchemaEvent", duration: "Duration", translator: "Person", inLanguage: "Language", review: "Review", sponsor: "Organization", location: "PostalAddress", recordedIn: "CreativeWork", composer: "Organization", performer: "Person", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
