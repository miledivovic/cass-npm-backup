/**
 *  Schema.org/Question
 *  A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.
 * 
 *  @author schema.org
 *  @class Question
 *  @module org.schema
 *  @extends CreativeWork
 */
var Question = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "Question";
};
Question = stjs.extend(Question, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/answerCount
     *  The number of answers this question has received.
     * 
     *  @property answerCount
     *  @type Integer
     */
    answerCount = null;
    /**
     *  Schema.org/acceptedAnswer
     *  The answer that has been accepted as best, typically on a Question/Answer site. Sites vary in their selection mechanisms, e.g. drawing on community opinion and/or the view of the Question author.
     * 
     *  @property acceptedAnswer
     *  @type Answer
     */
    acceptedAnswer = null;
    /**
     *  Schema.org/upvoteCount
     *  The number of upvotes this question, answer or comment has received from the community.
     * 
     *  @property upvoteCount
     *  @type Integer
     */
    upvoteCount = null;
    /**
     *  Schema.org/suggestedAnswer
     *  An answer (possibly one of several, possibly incorrect) to a Question, e.g. on a Question/Answer site.
     * 
     *  @property suggestedAnswer
     *  @type Answer
     */
    suggestedAnswer = null;
    /**
     *  Schema.org/downvoteCount
     *  The number of downvotes this question, answer or comment has received from the community.
     * 
     *  @property downvoteCount
     *  @type Integer
     */
    downvoteCount = null;
}, {acceptedAnswer: "Answer", suggestedAnswer: "Answer", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
