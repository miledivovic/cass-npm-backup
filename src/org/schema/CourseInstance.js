/**
 *  Schema.org/CourseInstance
 *  An instance of a [[Course]] which is distinct from other instances because it is offered at a different time or location or through different media or modes of study or to a specific section of students.
 * 
 *  @author schema.org
 *  @class CourseInstance
 *  @module org.schema
 *  @extends SchemaEvent
 */
var CourseInstance = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    SchemaEvent.call(this);
    this.context = "http://schema.org/";
    this.type = "CourseInstance";
};
CourseInstance = stjs.extend(CourseInstance, SchemaEvent, [], function(constructor, prototype) {
    /**
     *  Schema.org/instructor
     *  A person assigned to instruct or provide instructional assistance for the [[CourseInstance]].
     * 
     *  @property instructor
     *  @type Person
     */
    prototype.instructor = null;
    /**
     *  Schema.org/courseMode
     *  The medium or means of delivery of the course instance or the mode of study, either as a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or as a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ).
     * 
     *  @property courseMode
     *  @type Text
     */
    prototype.courseMode = null;
}, {instructor: "Person", about: "Thing", funder: "Person", workFeatured: "CreativeWork", audience: "Audience", actor: "Person", performers: "Organization", contributor: "Organization", organizer: "Person", attendees: "Person", aggregateRating: "AggregateRating", subEvent: "SchemaEvent", subEvents: "SchemaEvent", offers: "Offer", attendee: "Organization", workPerformed: "CreativeWork", eventStatus: "EventStatusType", director: "Person", superEvent: "SchemaEvent", duration: "Duration", translator: "Person", inLanguage: "Language", review: "Review", sponsor: "Organization", location: "PostalAddress", recordedIn: "CreativeWork", composer: "Organization", performer: "Person", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
