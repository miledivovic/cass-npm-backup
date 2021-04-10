/**
 *  Schema.org/RsvpAction
 *  The act of notifying an event organizer as to whether you expect to attend the event.
 * 
 *  @author schema.org
 *  @class RsvpAction
 *  @module org.schema
 *  @extends InformAction
 */
var RsvpAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    InformAction.call(this);
    this.context = "http://schema.org/";
    this.type = "RsvpAction";
};
RsvpAction = stjs.extend(RsvpAction, InformAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/additionalNumberOfGuests
     *  If responding yes, the number of guests who will attend in addition to the invitee.
     * 
     *  @property additionalNumberOfGuests
     *  @type Number
     */
    additionalNumberOfGuests = null;
    /**
     *  Schema.org/comment
     *  Comments, typically from users.
     * 
     *  @property comment
     *  @type Comment
     */
    comment = null;
    /**
     *  Schema.org/rsvpResponse
     *  The response (yes, no, maybe) to the RSVP.
     * 
     *  @property rsvpResponse
     *  @type RsvpResponseType
     */
    rsvpResponse = null;
}, {comment: "Comment", rsvpResponse: "RsvpResponseType", event: "SchemaEvent", about: "Thing", recipient: "Organization", inLanguage: "Language", language: "Language", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
