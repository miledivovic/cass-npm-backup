/**
 *  Schema.org/CreativeWork
 *  The most generic kind of creative work, including books, movies, photographs, software programs, etc.
 * 
 *  @author schema.org
 *  @class CreativeWork
 *  @module org.schema
 *  @extends Thing
 */
var CreativeWork = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Thing.call(this);
    this.context = "http://schema.org/";
    this.type = "CreativeWork";
};
CreativeWork = stjs.extend(CreativeWork, Thing, [], function(constructor, prototype) {
    /**
     *  Schema.org/about
     *  The subject matter of the content.
     * 
     *  @property about
     *  @type Thing
     */
    prototype.about = null;
    /**
     *  Schema.org/educationalAlignment
     *  An alignment to an established educational framework.
     * 
     *  @property educationalAlignment
     *  @type AlignmentObject
     */
    prototype.educationalAlignment = null;
    /**
     *  Schema.org/associatedMedia
     *  A media object that encodes this CreativeWork. This property is a synonym for encoding.
     * 
     *  @property associatedMedia
     *  @type MediaObject
     */
    prototype.associatedMedia = null;
    /**
     *  Schema.org/funder
     *  A person or organization that supports (sponsors) something through some kind of financial contribution.
     * 
     *  @property funder
     *  @type Person
     */
    prototype.funder = null;
    /**
     *  Schema.org/audio
     *  An embedded audio object.
     * 
     *  @property audio
     *  @type AudioObject
     */
    prototype.audio = null;
    /**
     *  Schema.org/workExample
     *  Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook.
     * 
     *  @property workExample
     *  @type CreativeWork
     */
    prototype.workExample = null;
    /**
     *  Schema.org/provider
     *  The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     * 
     *  @property provider
     *  @type Person
     */
    prototype.provider = null;
    /**
     *  Schema.org/encoding
     *  A media object that encodes this CreativeWork. This property is a synonym for associatedMedia.
     * 
     *  @property encoding
     *  @type MediaObject
     */
    prototype.encoding = null;
    /**
     *  Schema.org/interactivityType
     *  The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'.
     * 
     *  @property interactivityType
     *  @type Text
     */
    prototype.interactivityType = null;
    /**
     *  Schema.org/accessibilitySummary
     *  A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as "short descriptions are present but long descriptions will be needed for non-visual users" or "short descriptions are present and no long descriptions are needed."
     * 
     *  @property accessibilitySummary
     *  @type Text
     */
    prototype.accessibilitySummary = null;
    /**
     *  Schema.org/character
     *  Fictional person connected with a creative work.
     * 
     *  @property character
     *  @type Person
     */
    prototype.character = null;
    /**
     *  Schema.org/audience
     *  An intended audience, i.e. a group for whom something was created.
     * 
     *  @property audience
     *  @type Audience
     */
    prototype.audience = null;
    /**
     *  Schema.org/sourceOrganization
     *  The Organization on whose behalf the creator was working.
     * 
     *  @property sourceOrganization
     *  @type Organization
     */
    prototype.sourceOrganization = null;
    /**
     *  Schema.org/isPartOf
     *  Indicates a CreativeWork that this CreativeWork is (in some sense) part of.
     * 
     *  @property isPartOf
     *  @type CreativeWork
     */
    prototype.isPartOf = null;
    /**
     *  Schema.org/video
     *  An embedded video object.
     * 
     *  @property video
     *  @type VideoObject
     */
    prototype.video = null;
    /**
     *  Schema.org/publication
     *  A publication event associated with the item.
     * 
     *  @property publication
     *  @type PublicationEvent
     */
    prototype.publication = null;
    /**
     *  Schema.org/text
     *  The textual content of this CreativeWork.
     * 
     *  @property text
     *  @type Text
     */
    prototype.text = null;
    /**
     *  Schema.org/contributor
     *  A secondary contributor to the CreativeWork or SchemaEvent.
     * 
     *  @property contributor
     *  @type Organization
     */
    prototype.contributor = null;
    /**
     *  Schema.org/reviews
     *  Review of the item.
     * 
     *  @property reviews
     *  @type Review
     */
    prototype.reviews = null;
    /**
     *  Schema.org/typicalAgeRange
     *  The typical expected age range, e.g. '7-9', '11-'.
     * 
     *  @property typicalAgeRange
     *  @type Text
     */
    prototype.typicalAgeRange = null;
    /**
     *  Schema.org/hasPart
     *  Indicates a CreativeWork that is (in some sense) a part of this CreativeWork.
     * 
     *  @property hasPart
     *  @type CreativeWork
     */
    prototype.hasPart = null;
    /**
     *  Schema.org/position
     *  The position of an item in a series or sequence of items.
     * 
     *  @property position
     *  @type Integer
     */
    prototype.position = null;
    /**
     *  Schema.org/releasedEvent
     *  The place and time the release was issued, expressed as a PublicationEvent.
     * 
     *  @property releasedEvent
     *  @type PublicationEvent
     */
    prototype.releasedEvent = null;
    /**
     *  Schema.org/educationalUse
     *  The purpose of a work in the context of education; for example, 'assignment', 'group work'.
     * 
     *  @property educationalUse
     *  @type Text
     */
    prototype.educationalUse = null;
    /**
     *  Schema.org/contentLocation
     *  The location depicted or described in the content. For example, the location in a photograph or painting.
     * 
     *  @property contentLocation
     *  @type Place
     */
    prototype.contentLocation = null;
    /**
     *  Schema.org/schemaVersion
     *  Indicates (by URL or string) a particular version of a schema used in some CreativeWork. For example, a document could declare a schemaVersion using an URL such as schema:version/2.0/ if precise indication of schema version was required by some application.
     * 
     *  @property schemaVersion
     *  @type URL
     */
    prototype.schemaVersion = null;
    /**
     *  Schema.org/accessibilityFeature
     *  Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
     * 
     *  @property accessibilityFeature
     *  @type Text
     */
    prototype.accessibilityFeature = null;
    /**
     *  Schema.org/aggregateRating
     *  The overall rating, based on a collection of reviews or ratings, of the item.
     * 
     *  @property aggregateRating
     *  @type AggregateRating
     */
    prototype.aggregateRating = null;
    /**
     *  Schema.org/locationCreated
     *  The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork.
     * 
     *  @property locationCreated
     *  @type Place
     */
    prototype.locationCreated = null;
    /**
     *  Schema.org/accessModeSufficient
     *  A list of single or combined accessModes that are sufficient to understand all the intellectual content of a resource. Expected values include:  auditory, tactile, textual, visual.
     * 
     *  @property accessModeSufficient
     *  @type Text
     */
    prototype.accessModeSufficient = null;
    /**
     *  Schema.org/temporalCoverage
     *  The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in [ISO 8601 time interval format](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals). In
     *  the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or TVEpisode may indicate their temporalCoverage in broader terms - textually or via well-known URL.
     *  Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945".
     * 
     *  @property temporalCoverage
     *  @type URL
     */
    prototype.temporalCoverage = null;
    /**
     *  Schema.org/accountablePerson
     *  Specifies the Person that is legally accountable for the CreativeWork.
     * 
     *  @property accountablePerson
     *  @type Person
     */
    prototype.accountablePerson = null;
    /**
     *  Schema.org/spatialCoverage
     *  The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of
     *  contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates
     *  areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.
     * 
     *  @property spatialCoverage
     *  @type Place
     */
    prototype.spatialCoverage = null;
    /**
     *  Schema.org/offers
     *  An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event.
     * 
     *  @property offers
     *  @type Offer
     */
    prototype.offers = null;
    /**
     *  Schema.org/editor
     *  Specifies the Person who edited the CreativeWork.
     * 
     *  @property editor
     *  @type Person
     */
    prototype.editor = null;
    /**
     *  Schema.org/discussionUrl
     *  A link to the page containing the comments of the CreativeWork.
     * 
     *  @property discussionUrl
     *  @type URL
     */
    prototype.discussionUrl = null;
    /**
     *  Schema.org/award
     *  An award won by or for this item.
     * 
     *  @property award
     *  @type Text
     */
    prototype.award = null;
    /**
     *  Schema.org/copyrightHolder
     *  The party holding the legal copyright to the CreativeWork.
     * 
     *  @property copyrightHolder
     *  @type Person
     */
    prototype.copyrightHolder = null;
    /**
     *  Schema.org/accessibilityHazard
     *  A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3 ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
     * 
     *  @property accessibilityHazard
     *  @type Text
     */
    prototype.accessibilityHazard = null;
    /**
     *  Schema.org/copyrightYear
     *  The year during which the claimed copyright for the CreativeWork was first asserted.
     * 
     *  @property copyrightYear
     *  @type Number
     */
    prototype.copyrightYear = null;
    /**
     *  Schema.org/awards
     *  Awards won by or for this item.
     * 
     *  @property awards
     *  @type Text
     */
    prototype.awards = null;
    /**
     *  Schema.org/recordedAt
     *  The SchemaEvent where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.
     * 
     *  @property recordedAt
     *  @type SchemaEvent
     */
    prototype.recordedAt = null;
    /**
     *  Schema.org/commentCount
     *  The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere.
     * 
     *  @property commentCount
     *  @type Integer
     */
    prototype.commentCount = null;
    /**
     *  Schema.org/fileFormat
     *  Media type, typically MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml)) of the content e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry.
     * 
     *  @property fileFormat
     *  @type Text
     */
    prototype.fileFormat = null;
    /**
     *  Schema.org/accessibilityAPI
     *  Indicates that the resource is compatible with the referenced accessibility API ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
     * 
     *  @property accessibilityAPI
     *  @type Text
     */
    prototype.accessibilityAPI = null;
    /**
     *  Schema.org/publisher
     *  The publisher of the creative work.
     * 
     *  @property publisher
     *  @type Person
     */
    prototype.publisher = null;
    /**
     *  Schema.org/interactionStatistic
     *  The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
     * 
     *  @property interactionStatistic
     *  @type InteractionCounter
     */
    prototype.interactionStatistic = null;
    /**
     *  Schema.org/contentRating
     *  Official rating of a piece of content&#x2014;for example,'MPAA PG-13'.
     * 
     *  @property contentRating
     *  @type Text
     */
    prototype.contentRating = null;
    /**
     *  Schema.org/learningResourceType
     *  The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.
     * 
     *  @property learningResourceType
     *  @type Text
     */
    prototype.learningResourceType = null;
    /**
     *  Schema.org/accessMode
     *  The human sensory perceptual system or cognitive faculty through which a person may process or perceive information. Expected values include: auditory, tactile, textual, visual, colorDependent, chartOnVisual, chemOnVisual, diagramOnVisual, mathOnVisual, musicOnVisual, textOnVisual.
     * 
     *  @property accessMode
     *  @type Text
     */
    prototype.accessMode = null;
    /**
     *  Schema.org/material
     *  A material that something is made from, e.g. leather, wool, cotton, paper.
     * 
     *  @property material
     *  @type URL
     */
    prototype.material = null;
    /**
     *  Schema.org/isFamilyFriendly
     *  Indicates whether this content is family friendly.
     * 
     *  @property isFamilyFriendly
     *  @type Boolean
     */
    prototype.isFamilyFriendly = null;
    /**
     *  Schema.org/exampleOfWork
     *  A creative work that this work is an example/instance/realization/derivation of.
     * 
     *  @property exampleOfWork
     *  @type CreativeWork
     */
    prototype.exampleOfWork = null;
    /**
     *  Schema.org/version
     *  The version of the CreativeWork embodied by a specified resource.
     * 
     *  @property version
     *  @type Text
     */
    prototype.version = null;
    /**
     *  Schema.org/dateModified
     *  The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.
     * 
     *  @property dateModified
     *  @type DateTime
     */
    prototype.dateModified = null;
    /**
     *  Schema.org/mainEntity
     *  Indicates the primary entity described in some page or other CreativeWork.
     * 
     *  @property mainEntity
     *  @type Thing
     */
    prototype.mainEntity = null;
    /**
     *  Schema.org/genre
     *  Genre of the creative work, broadcast channel or group.
     * 
     *  @property genre
     *  @type URL
     */
    prototype.genre = null;
    /**
     *  Schema.org/keywords
     *  Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas.
     * 
     *  @property keywords
     *  @type Text
     */
    prototype.keywords = null;
    /**
     *  Schema.org/author
     *  The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
     * 
     *  @property author
     *  @type Person
     */
    prototype.author = null;
    /**
     *  Schema.org/isBasedOnUrl
     *  A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.
     * 
     *  @property isBasedOnUrl
     *  @type URL
     */
    prototype.isBasedOnUrl = null;
    /**
     *  Schema.org/timeRequired
     *  Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'P30M', 'P1H25M'.
     * 
     *  @property timeRequired
     *  @type Duration
     */
    prototype.timeRequired = null;
    /**
     *  Schema.org/translator
     *  Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
     * 
     *  @property translator
     *  @type Person
     */
    prototype.translator = null;
    /**
     *  Schema.org/thumbnailUrl
     *  A thumbnail image relevant to the Thing.
     * 
     *  @property thumbnailUrl
     *  @type URL
     */
    prototype.thumbnailUrl = null;
    /**
     *  Schema.org/comment
     *  Comments, typically from users.
     * 
     *  @property comment
     *  @type Comment
     */
    prototype.comment = null;
    /**
     *  Schema.org/inLanguage
     *  The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
     * 
     *  @property inLanguage
     *  @type Language
     */
    prototype.inLanguage = null;
    /**
     *  Schema.org/review
     *  A review of the item.
     * 
     *  @property review
     *  @type Review
     */
    prototype.review = null;
    /**
     *  Schema.org/license
     *  A license document that applies to this content, typically indicated by URL.
     * 
     *  @property license
     *  @type CreativeWork
     */
    prototype.license = null;
    /**
     *  Schema.org/accessibilityControl
     *  Identifies input methods that are sufficient to fully control the described resource ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
     * 
     *  @property accessibilityControl
     *  @type Text
     */
    prototype.accessibilityControl = null;
    /**
     *  Schema.org/encodings
     *  A media object that encodes this CreativeWork.
     * 
     *  @property encodings
     *  @type MediaObject
     */
    prototype.encodings = null;
    /**
     *  Schema.org/isBasedOn
     *  A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.
     * 
     *  @property isBasedOn
     *  @type Product
     */
    prototype.isBasedOn = null;
    /**
     *  Schema.org/creator
     *  The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
     * 
     *  @property creator
     *  @type Person
     */
    prototype.creator = null;
    /**
     *  Schema.org/publishingPrinciples
     *  Link to page describing the editorial principles of the organization primarily responsible for the creation of the CreativeWork.
     * 
     *  @property publishingPrinciples
     *  @type URL
     */
    prototype.publishingPrinciples = null;
    /**
     *  Schema.org/sponsor
     *  A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
     * 
     *  @property sponsor
     *  @type Organization
     */
    prototype.sponsor = null;
    /**
     *  Schema.org/producer
     *  The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.).
     * 
     *  @property producer
     *  @type Person
     */
    prototype.producer = null;
    /**
     *  Schema.org/mentions
     *  Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.
     * 
     *  @property mentions
     *  @type Thing
     */
    prototype.mentions = null;
    /**
     *  Schema.org/dateCreated
     *  The date on which the CreativeWork was created or the item was added to a DataFeed.
     * 
     *  @property dateCreated
     *  @type Date
     */
    prototype.dateCreated = null;
    /**
     *  Schema.org/datePublished
     *  Date of first broadcast/publication.
     * 
     *  @property datePublished
     *  @type Date
     */
    prototype.datePublished = null;
    /**
     *  Schema.org/isAccessibleForFree
     *  A flag to signal that the publication is accessible for free.
     * 
     *  @property isAccessibleForFree
     *  @type Boolean
     */
    prototype.isAccessibleForFree = null;
    /**
     *  Schema.org/alternativeHeadline
     *  A secondary title of the CreativeWork.
     * 
     *  @property alternativeHeadline
     *  @type Text
     */
    prototype.alternativeHeadline = null;
    /**
     *  Schema.org/headline
     *  Headline of the article.
     * 
     *  @property headline
     *  @type Text
     */
    prototype.headline = null;
    /**
     *  Schema.org/citation
     *  A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.
     * 
     *  @property citation
     *  @type Text
     */
    prototype.citation = null;
}, {about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
