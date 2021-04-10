/**
 *  Schema.org/UserComments
 *  UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 * 
 *  @author schema.org
 *  @class UserComments
 *  @module org.schema
 *  @extends UserInteraction
 */
var UserComments = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    UserInteraction.call(this);
    this.context = "http://schema.org/";
    this.type = "UserComments";
};
UserComments = stjs.extend(UserComments, UserInteraction, [], function(constructor, prototype) {
    /**
     *  Schema.org/discusses
     *  Specifies the CreativeWork associated with the UserComment.
     * 
     *  @property discusses
     *  @type CreativeWork
     */
    discusses = null;
    /**
     *  Schema.org/commentText
     *  The text of the UserComment.
     * 
     *  @property commentText
     *  @type Text
     */
    commentText = null;
    /**
     *  Schema.org/commentTime
     *  The time at which the UserComment was made.
     * 
     *  @property commentTime
     *  @type Date
     */
    commentTime = null;
    /**
     *  Schema.org/creator
     *  The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
     * 
     *  @property creator
     *  @type Person
     */
    creator = null;
    /**
     *  Schema.org/replyToUrl
     *  The URL at which a reply may be posted to the specified UserComment.
     * 
     *  @property replyToUrl
     *  @type URL
     */
    replyToUrl = null;
}, {discusses: "CreativeWork", creator: "Person", about: "Thing", funder: "Person", workFeatured: "CreativeWork", audience: "Audience", actor: "Person", performers: "Organization", contributor: "Organization", organizer: "Person", attendees: "Person", aggregateRating: "AggregateRating", subEvent: "SchemaEvent", subEvents: "SchemaEvent", offers: "Offer", attendee: "Organization", workPerformed: "CreativeWork", eventStatus: "EventStatusType", director: "Person", superEvent: "SchemaEvent", duration: "Duration", translator: "Person", inLanguage: "Language", review: "Review", sponsor: "Organization", location: "PostalAddress", recordedIn: "CreativeWork", composer: "Organization", performer: "Person", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
