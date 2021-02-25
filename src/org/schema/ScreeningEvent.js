/**
 *  Schema.org/ScreeningEvent
 *  A screening of a movie or other video.
 * 
 *  @author schema.org
 *  @class ScreeningEvent
 *  @module org.schema
 *  @extends SchemaEvent
 */
var ScreeningEvent = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    SchemaEvent.call(this);
    this.context = "http://schema.org/";
    this.type = "ScreeningEvent";
};
ScreeningEvent = stjs.extend(ScreeningEvent, SchemaEvent, [], function(constructor, prototype) {
    /**
     *  Schema.org/videoFormat
     *  The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).
     * 
     *  @property videoFormat
     *  @type Text
     */
    prototype.videoFormat = null;
    /**
     *  Schema.org/subtitleLanguage
     *  Languages in which subtitles/captions are available, in [IETF BCP 47 standard format](http://tools.ietf.org/html/bcp47).
     * 
     *  @property subtitleLanguage
     *  @type Text
     */
    prototype.subtitleLanguage = null;
    /**
     *  Schema.org/workPresented
     *  The movie presented during this event.
     * 
     *  @property workPresented
     *  @type Movie
     */
    prototype.workPresented = null;
}, {workPresented: "Movie", about: "Thing", funder: "Person", workFeatured: "CreativeWork", audience: "Audience", actor: "Person", performers: "Organization", contributor: "Organization", organizer: "Person", attendees: "Person", aggregateRating: "AggregateRating", subEvent: "SchemaEvent", subEvents: "SchemaEvent", offers: "Offer", attendee: "Organization", workPerformed: "CreativeWork", eventStatus: "EventStatusType", director: "Person", superEvent: "SchemaEvent", duration: "Duration", translator: "Person", inLanguage: "Language", review: "Review", sponsor: "Organization", location: "PostalAddress", recordedIn: "CreativeWork", composer: "Organization", performer: "Person", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
