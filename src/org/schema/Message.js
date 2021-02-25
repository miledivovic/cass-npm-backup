/**
 *  Schema.org/Message
 *  A single message from a sender to one or more organizations or people.
 * 
 *  @author schema.org
 *  @class Message
 *  @module org.schema
 *  @extends CreativeWork
 */
var Message = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "Message";
};
Message = stjs.extend(Message, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/dateRead
     *  The date/time at which the message has been read by the recipient if a single recipient exists.
     * 
     *  @property dateRead
     *  @type DateTime
     */
    prototype.dateRead = null;
    /**
     *  Schema.org/dateSent
     *  The date/time at which the message was sent.
     * 
     *  @property dateSent
     *  @type DateTime
     */
    prototype.dateSent = null;
    /**
     *  Schema.org/recipient
     *  A sub property of participant. The participant who is at the receiving end of the action.
     * 
     *  @property recipient
     *  @type Organization
     */
    prototype.recipient = null;
    /**
     *  Schema.org/messageAttachment
     *  A CreativeWork attached to the message.
     * 
     *  @property messageAttachment
     *  @type CreativeWork
     */
    prototype.messageAttachment = null;
    /**
     *  Schema.org/dateReceived
     *  The date/time the message was received if a single recipient exists.
     * 
     *  @property dateReceived
     *  @type DateTime
     */
    prototype.dateReceived = null;
    /**
     *  Schema.org/sender
     *  A sub property of participant. The participant who is at the sending end of the action.
     * 
     *  @property sender
     *  @type Audience
     */
    prototype.sender = null;
}, {recipient: "Organization", messageAttachment: "CreativeWork", sender: "Audience", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
