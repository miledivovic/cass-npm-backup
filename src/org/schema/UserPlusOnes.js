/**
 *  Schema.org/UserPlusOnes
 *  UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 * 
 *  @author schema.org
 *  @class UserPlusOnes
 *  @module org.schema
 *  @extends UserInteraction
 */
var UserPlusOnes = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    UserInteraction.call(this);
    this.context = "http://schema.org/";
    this.type = "UserPlusOnes";
};
UserPlusOnes = stjs.extend(UserPlusOnes, UserInteraction, [], null, {about: "Thing", funder: "Person", workFeatured: "CreativeWork", audience: "Audience", actor: "Person", performers: "Organization", contributor: "Organization", organizer: "Person", attendees: "Person", aggregateRating: "AggregateRating", subEvent: "SchemaEvent", subEvents: "SchemaEvent", offers: "Offer", attendee: "Organization", workPerformed: "CreativeWork", eventStatus: "EventStatusType", director: "Person", superEvent: "SchemaEvent", duration: "Duration", translator: "Person", inLanguage: "Language", review: "Review", sponsor: "Organization", location: "PostalAddress", recordedIn: "CreativeWork", composer: "Organization", performer: "Person", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
