/**
 *  Schema.org/WebPage
 *  A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as <code>breadcrumb</code> may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page.
 * 
 *  @author schema.org
 *  @class WebPage
 *  @module org.schema
 *  @extends CreativeWork
 */
var WebPage = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "WebPage";
};
WebPage = stjs.extend(WebPage, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/lastReviewed
     *  Date on which the content on this web page was last reviewed for accuracy and/or completeness.
     * 
     *  @property lastReviewed
     *  @type Date
     */
    lastReviewed = null;
    /**
     *  Schema.org/breadcrumb
     *  A set of links that can help a user understand and navigate a website hierarchy.
     * 
     *  @property breadcrumb
     *  @type Text
     */
    breadcrumb = null;
    /**
     *  Schema.org/significantLink
     *  One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.
     * 
     *  @property significantLink
     *  @type URL
     */
    significantLink = null;
    /**
     *  Schema.org/relatedLink
     *  A link related to this web page, for example to other related web pages.
     * 
     *  @property relatedLink
     *  @type URL
     */
    relatedLink = null;
    /**
     *  Schema.org/mainContentOfPage
     *  Indicates if this web page element is the main subject of the page.
     * 
     *  @property mainContentOfPage
     *  @type WebPageElement
     */
    mainContentOfPage = null;
    /**
     *  Schema.org/reviewedBy
     *  People or organizations that have reviewed the content on this web page for accuracy and/or completeness.
     * 
     *  @property reviewedBy
     *  @type Organization
     */
    reviewedBy = null;
    /**
     *  Schema.org/primaryImageOfPage
     *  Indicates the main image on the page.
     * 
     *  @property primaryImageOfPage
     *  @type ImageObject
     */
    primaryImageOfPage = null;
    /**
     *  Schema.org/significantLinks
     *  The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.
     * 
     *  @property significantLinks
     *  @type URL
     */
    significantLinks = null;
    /**
     *  Schema.org/specialty
     *  One of the domain specialities to which this web page's content applies.
     * 
     *  @property specialty
     *  @type Specialty
     */
    specialty = null;
}, {mainContentOfPage: "WebPageElement", reviewedBy: "Organization", primaryImageOfPage: "ImageObject", specialty: "Specialty", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
