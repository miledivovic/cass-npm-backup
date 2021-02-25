/**
 *  Schema.org/Book
 *  A book.
 * 
 *  @author schema.org
 *  @class Book
 *  @module org.schema
 *  @extends CreativeWork
 */
var Book = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "Book";
};
Book = stjs.extend(Book, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/isbn
     *  The ISBN of the book.
     * 
     *  @property isbn
     *  @type Text
     */
    prototype.isbn = null;
    /**
     *  Schema.org/bookEdition
     *  The edition of the book.
     * 
     *  @property bookEdition
     *  @type Text
     */
    prototype.bookEdition = null;
    /**
     *  Schema.org/bookFormat
     *  The format of the book.
     * 
     *  @property bookFormat
     *  @type BookFormatType
     */
    prototype.bookFormat = null;
    /**
     *  Schema.org/numberOfPages
     *  The number of pages in the book.
     * 
     *  @property numberOfPages
     *  @type Integer
     */
    prototype.numberOfPages = null;
    /**
     *  Schema.org/illustrator
     *  The illustrator of the book.
     * 
     *  @property illustrator
     *  @type Person
     */
    prototype.illustrator = null;
}, {bookFormat: "BookFormatType", illustrator: "Person", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
