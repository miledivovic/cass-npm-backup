const schema = {};
schema.Thing = require("./Thing.js");
/**
 * Schema.org/CreativeWork
 * The most generic kind of creative work, including books, movies, photographs, software programs, etc.
 *
 * @author schema.org
 * @class CreativeWork
 * @module org.schema
 * @extends Thing
 */
module.exports = class CreativeWork extends schema.Thing {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CreativeWork");
	}

	/**
	 * Schema.org/text
	 * The textual content of this CreativeWork.
	 *
	 * @property text
	 * @type Text
	 */
	text;

	/**
	 * Schema.org/aggregateRating
	 * The overall rating, based on a collection of reviews or ratings, of the item.
	 *
	 * @property aggregateRating
	 * @type AggregateRating
	 */
	aggregateRating;

	/**
	 * Schema.org/discussionUrl
	 * A link to the page containing the comments of the CreativeWork.
	 *
	 * @property discussionUrl
	 * @type URL
	 */
	discussionUrl;

	/**
	 * Schema.org/temporal
	 * The "temporal" property can be used in cases where more specific properties
(e.g. [[temporalCoverage]], [[dateCreated]], [[dateModified]], [[datePublished]]) are not known to be appropriate.
	 *
	 * @property temporal
	 * @type Text
	 */
	temporal;

	/**
	 * Schema.org/conditionsOfAccess
	 * Conditions that affect the availability of, or method(s) of access to, an item. Typically used for real world items such as an [[ArchiveComponent]] held by an [[ArchiveOrganization]]. This property is not suitable for use as a general Web access control mechanism. It is expressed only in natural language.\n\nFor example "Available by appointment from the Reading Room" or "Accessible only from logged-in accounts ". 
	 *
	 * @property conditionsOfAccess
	 * @type Text
	 */
	conditionsOfAccess;

	/**
	 * Schema.org/expires
	 * Date the content expires and is no longer useful or available. For example a [[VideoObject]] or [[NewsArticle]] whose availability or relevance is time-limited, or a [[ClaimReview]] fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date.
	 *
	 * @property expires
	 * @type Date
	 */
	expires;

	/**
	 * Schema.org/size
	 * A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a  QuantitativeValue with a unitCode, or a comprehensive and structured [[SizeSpecification]]; in other cases, the [[width]], [[height]], [[depth]] and [[weight]] properties may be more applicable. 
	 *
	 * @property size
	 * @type SizeSpecification
	 */
	size;

	/**
	 * Schema.org/timeRequired
	 * Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'PT30M', 'PT1H25M'.
	 *
	 * @property timeRequired
	 * @type Duration
	 */
	timeRequired;

	/**
	 * Schema.org/dateModified
	 * The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.
	 *
	 * @property dateModified
	 * @type Date
	 */
	dateModified;

	/**
	 * Schema.org/spatialCoverage
	 * The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of
      contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates
      areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.
	 *
	 * @property spatialCoverage
	 * @type Place
	 */
	spatialCoverage;

	/**
	 * Schema.org/educationalLevel
	 * The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
	 *
	 * @property educationalLevel
	 * @type Text
	 */
	educationalLevel;

	/**
	 * Schema.org/exampleOfWork
	 * A creative work that this work is an example/instance/realization/derivation of.
	 *
	 * @property exampleOfWork
	 * @type CreativeWork
	 */
	exampleOfWork;

	/**
	 * Schema.org/copyrightYear
	 * The year during which the claimed copyright for the CreativeWork was first asserted.
	 *
	 * @property copyrightYear
	 * @type Number
	 */
	copyrightYear;

	/**
	 * Schema.org/sourceOrganization
	 * The Organization on whose behalf the creator was working.
	 *
	 * @property sourceOrganization
	 * @type Organization
	 */
	sourceOrganization;

	/**
	 * Schema.org/isPartOf
	 * Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of.
	 *
	 * @property isPartOf
	 * @type URL
	 */
	isPartOf;

	/**
	 * Schema.org/video
	 * An embedded video object.
	 *
	 * @property video
	 * @type VideoObject
	 */
	video;

	/**
	 * Schema.org/workTranslation
	 * A work that is a translation of the content of this work. e.g. 西遊記 has an English workTranslation “Journey to the West”,a German workTranslation “Monkeys Pilgerfahrt” and a Vietnamese  translation Tây du ký bình khảo.
	 *
	 * @property workTranslation
	 * @type CreativeWork
	 */
	workTranslation;

	/**
	 * Schema.org/sdPublisher
	 * Indicates the party responsible for generating and publishing the current structured data markup, typically in cases where the structured data is derived automatically from existing published content but published on a different site. For example, student projects and open data initiatives often re-publish existing content with more explicitly structured metadata. The
[[sdPublisher]] property helps make such practices more explicit.
	 *
	 * @property sdPublisher
	 * @type Person
	 */
	sdPublisher;

	/**
	 * Schema.org/creator
	 * The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
	 *
	 * @property creator
	 * @type Organization
	 */
	creator;

	/**
	 * Schema.org/thumbnailUrl
	 * A thumbnail image relevant to the Thing.
	 *
	 * @property thumbnailUrl
	 * @type URL
	 */
	thumbnailUrl;

	/**
	 * Schema.org/translationOfWork
	 * The work that this work has been translated from. e.g. 物种起源 is a translationOf “On the Origin of Species”
	 *
	 * @property translationOfWork
	 * @type CreativeWork
	 */
	translationOfWork;

	/**
	 * Schema.org/contentReferenceTime
	 * The specific time described by a creative work, for works (e.g. articles, video objects etc.) that emphasise a particular moment within an Event.
	 *
	 * @property contentReferenceTime
	 * @type DateTime
	 */
	contentReferenceTime;

	/**
	 * Schema.org/datePublished
	 * Date of first broadcast/publication.
	 *
	 * @property datePublished
	 * @type Date
	 */
	datePublished;

	/**
	 * Schema.org/temporalCoverage
	 * The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in [ISO 8601 time interval format](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals). In
      the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or TVEpisode may indicate their temporalCoverage in broader terms - textually or via well-known URL.
      Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945".

Open-ended date ranges can be written with ".." in place of the end date. For example, "2015-11/.." indicates a range beginning in November 2015 and with no specified final date. This is tentative and might be updated in future when ISO 8601 is officially updated.
	 *
	 * @property temporalCoverage
	 * @type Text
	 */
	temporalCoverage;

	/**
	 * Schema.org/fileFormat
	 * Media type, typically MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml)) of the content e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry.
	 *
	 * @property fileFormat
	 * @type URL
	 */
	fileFormat;

	/**
	 * Schema.org/contentLocation
	 * The location depicted or described in the content. For example, the location in a photograph or painting.
	 *
	 * @property contentLocation
	 * @type Place
	 */
	contentLocation;

	/**
	 * Schema.org/alternativeHeadline
	 * A secondary title of the CreativeWork.
	 *
	 * @property alternativeHeadline
	 * @type Text
	 */
	alternativeHeadline;

	/**
	 * Schema.org/contributor
	 * A secondary contributor to the CreativeWork or Event.
	 *
	 * @property contributor
	 * @type Person
	 */
	contributor;

	/**
	 * Schema.org/version
	 * The version of the CreativeWork embodied by a specified resource.
	 *
	 * @property version
	 * @type Number
	 */
	version;

	/**
	 * Schema.org/accessMode
	 * The human sensory perceptual system or cognitive faculty through which a person may process or perceive information. Expected values include: auditory, tactile, textual, visual, colorDependent, chartOnVisual, chemOnVisual, diagramOnVisual, mathOnVisual, musicOnVisual, textOnVisual.
      
	 *
	 * @property accessMode
	 * @type Text
	 */
	accessMode;

	/**
	 * Schema.org/spatial
	 * The "spatial" property can be used in cases when more specific properties
(e.g. [[locationCreated]], [[spatialCoverage]], [[contentLocation]]) are not known to be appropriate.
	 *
	 * @property spatial
	 * @type Place
	 */
	spatial;

	/**
	 * Schema.org/encoding
	 * A media object that encodes this CreativeWork. This property is a synonym for associatedMedia.
	 *
	 * @property encoding
	 * @type MediaObject
	 */
	encoding;

	/**
	 * Schema.org/producer
	 * The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.).
	 *
	 * @property producer
	 * @type Person
	 */
	producer;

	/**
	 * Schema.org/abstract
	 * An abstract is a short description that summarizes a [[CreativeWork]].
	 *
	 * @property abstract
	 * @type Text
	 */
	abstract;

	/**
	 * Schema.org/publication
	 * A publication event associated with the item.
	 *
	 * @property publication
	 * @type PublicationEvent
	 */
	publication;

	/**
	 * Schema.org/locationCreated
	 * The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork.
	 *
	 * @property locationCreated
	 * @type Place
	 */
	locationCreated;

	/**
	 * Schema.org/maintainer
	 * A maintainer of a [[Dataset]], software package ([[SoftwareApplication]]), or other [[Project]]. A maintainer is a [[Person]] or [[Organization]] that manages contributions to, and/or publication of, some (typically complex) artifact. It is common for distributions of software and data to be based on "upstream" sources. When [[maintainer]] is applied to a specific version of something e.g. a particular version or packaging of a [[Dataset]], it is always  possible that the upstream source has a different maintainer. The [[isBasedOn]] property can be used to indicate such relationships between datasets to make the different maintenance roles clear. Similarly in the case of software, a package may have dedicated maintainers working on integration into software distributions such as Ubuntu, as well as upstream maintainers of the underlying work.
      
	 *
	 * @property maintainer
	 * @type Organization
	 */
	maintainer;

	/**
	 * Schema.org/copyrightHolder
	 * The party holding the legal copyright to the CreativeWork.
	 *
	 * @property copyrightHolder
	 * @type Person
	 */
	copyrightHolder;

	/**
	 * Schema.org/offers
	 * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
      
	 *
	 * @property offers
	 * @type Demand
	 */
	offers;

	/**
	 * Schema.org/genre
	 * Genre of the creative work, broadcast channel or group.
	 *
	 * @property genre
	 * @type URL
	 */
	genre;

	/**
	 * Schema.org/author
	 * The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
	 *
	 * @property author
	 * @type Organization
	 */
	author;

	/**
	 * Schema.org/accessibilitySummary
	 * A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as "short descriptions are present but long descriptions will be needed for non-visual users" or "short descriptions are present and no long descriptions are needed."
	 *
	 * @property accessibilitySummary
	 * @type Text
	 */
	accessibilitySummary;

	/**
	 * Schema.org/dateCreated
	 * The date on which the CreativeWork was created or the item was added to a DataFeed.
	 *
	 * @property dateCreated
	 * @type DateTime
	 */
	dateCreated;

	/**
	 * Schema.org/reviews
	 * Review of the item.
	 *
	 * @property reviews
	 * @type Review
	 */
	reviews;

	/**
	 * Schema.org/contentRating
	 * Official rating of a piece of content&#x2014;for example,'MPAA PG-13'.
	 *
	 * @property contentRating
	 * @type Text
	 */
	contentRating;

	/**
	 * Schema.org/accessibilityAPI
	 * Indicates that the resource is compatible with the referenced accessibility API ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
	 *
	 * @property accessibilityAPI
	 * @type Text
	 */
	accessibilityAPI;

	/**
	 * Schema.org/publisher
	 * The publisher of the creative work.
	 *
	 * @property publisher
	 * @type Person
	 */
	publisher;

	/**
	 * Schema.org/license
	 * A license document that applies to this content, typically indicated by URL.
	 *
	 * @property license
	 * @type CreativeWork
	 */
	license;

	/**
	 * Schema.org/isFamilyFriendly
	 * Indicates whether this content is family friendly.
	 *
	 * @property isFamilyFriendly
	 * @type Boolean
	 */
	isFamilyFriendly;

	/**
	 * Schema.org/accessibilityHazard
	 * A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3 ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
	 *
	 * @property accessibilityHazard
	 * @type Text
	 */
	accessibilityHazard;

	/**
	 * Schema.org/mainEntity
	 * Indicates the primary entity described in some page or other CreativeWork.
	 *
	 * @property mainEntity
	 * @type Thing
	 */
	mainEntity;

	/**
	 * Schema.org/award
	 * An award won by or for this item.
	 *
	 * @property award
	 * @type Text
	 */
	award;

	/**
	 * Schema.org/provider
	 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
	 *
	 * @property provider
	 * @type Organization
	 */
	provider;

	/**
	 * Schema.org/review
	 * A review of the item.
	 *
	 * @property review
	 * @type Review
	 */
	review;

	/**
	 * Schema.org/accountablePerson
	 * Specifies the Person that is legally accountable for the CreativeWork.
	 *
	 * @property accountablePerson
	 * @type Person
	 */
	accountablePerson;

	/**
	 * Schema.org/interactivityType
	 * The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'.
	 *
	 * @property interactivityType
	 * @type Text
	 */
	interactivityType;

	/**
	 * Schema.org/editEIDR
	 * An [EIDR](https://eidr.org/) (Entertainment Identifier Registry) [[identifier]] representing a specific edit / edition for a work of film or television.

For example, the motion picture known as "Ghostbusters" whose [[titleEIDR]] is "10.5240/7EC7-228A-510A-053E-CBB8-J", has several edits e.g. "10.5240/1F2A-E1C5-680A-14C6-E76B-I" and "10.5240/8A35-3BEE-6497-5D12-9E4F-3".

Since schema.org types like [[Movie]] and [[TVEpisode]] can be used for both works and their multiple expressions, it is possible to use [[titleEIDR]] alone (for a general description), or alongside [[editEIDR]] for a more edit-specific description.

	 *
	 * @property editEIDR
	 * @type URL
	 */
	editEIDR;

	/**
	 * Schema.org/translator
	 * Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
	 *
	 * @property translator
	 * @type Person
	 */
	translator;

	/**
	 * Schema.org/commentCount
	 * The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere.
	 *
	 * @property commentCount
	 * @type Integer
	 */
	commentCount;

	/**
	 * Schema.org/schemaVersion
	 * Indicates (by URL or string) a particular version of a schema used in some CreativeWork. This property was created primarily to
    indicate the use of a specific schema.org release, e.g. ```10.0``` as a simple string, or more explicitly via URL, ```schema:docs/releases.html#v10.0```. There may be situations in which other schemas might usefully be referenced this way, e.g. ```http://dublincore.org/specifications/dublin-core/dces/1999-07-02/``` but this has not been carefully explored in the community.
	 *
	 * @property schemaVersion
	 * @type URL
	 */
	schemaVersion;

	/**
	 * Schema.org/sdDatePublished
	 * Indicates the date on which the current structured data was generated / published. Typically used alongside [[sdPublisher]]
	 *
	 * @property sdDatePublished
	 * @type Date
	 */
	sdDatePublished;

	/**
	 * Schema.org/educationalUse
	 * The purpose of a work in the context of education; for example, 'assignment', 'group work'.
	 *
	 * @property educationalUse
	 * @type DefinedTerm
	 */
	educationalUse;

	/**
	 * Schema.org/accessibilityControl
	 * Identifies input methods that are sufficient to fully control the described resource ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
	 *
	 * @property accessibilityControl
	 * @type Text
	 */
	accessibilityControl;

	/**
	 * Schema.org/sponsor
	 * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
	 *
	 * @property sponsor
	 * @type Person
	 */
	sponsor;

	/**
	 * Schema.org/educationalAlignment
	 * An alignment to an established educational framework.

This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
	 *
	 * @property educationalAlignment
	 * @type AlignmentObject
	 */
	educationalAlignment;

	/**
	 * Schema.org/isAccessibleForFree
	 * A flag to signal that the item, event, or place is accessible for free.
	 *
	 * @property isAccessibleForFree
	 * @type Boolean
	 */
	isAccessibleForFree;

	/**
	 * Schema.org/encodings
	 * A media object that encodes this CreativeWork.
	 *
	 * @property encodings
	 * @type MediaObject
	 */
	encodings;

	/**
	 * Schema.org/accessModeSufficient
	 * A list of single or combined accessModes that are sufficient to understand all the intellectual content of a resource. Expected values include:  auditory, tactile, textual, visual.
      
	 *
	 * @property accessModeSufficient
	 * @type ItemList
	 */
	accessModeSufficient;

	/**
	 * Schema.org/usageInfo
	 * The schema.org [[usageInfo]] property indicates further information about a [[CreativeWork]]. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.

This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.
	 *
	 * @property usageInfo
	 * @type CreativeWork
	 */
	usageInfo;

	/**
	 * Schema.org/recordedAt
	 * The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.
	 *
	 * @property recordedAt
	 * @type Event
	 */
	recordedAt;

	/**
	 * Schema.org/character
	 * Fictional person connected with a creative work.
	 *
	 * @property character
	 * @type Person
	 */
	character;

	/**
	 * Schema.org/citation
	 * A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.
	 *
	 * @property citation
	 * @type Text
	 */
	citation;

	/**
	 * Schema.org/pattern
	 * A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported.
	 *
	 * @property pattern
	 * @type Text
	 */
	pattern;

	/**
	 * Schema.org/copyrightNotice
	 * Text of a notice appropriate for describing the copyright aspects of this Creative Work, ideally indicating the owner of the copyright for the Work.
	 *
	 * @property copyrightNotice
	 * @type Text
	 */
	copyrightNotice;

	/**
	 * Schema.org/headline
	 * Headline of the article.
	 *
	 * @property headline
	 * @type Text
	 */
	headline;

	/**
	 * Schema.org/interactionStatistic
	 * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
	 *
	 * @property interactionStatistic
	 * @type InteractionCounter
	 */
	interactionStatistic;

	/**
	 * Schema.org/mentions
	 * Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.
	 *
	 * @property mentions
	 * @type Thing
	 */
	mentions;

	/**
	 * Schema.org/sdLicense
	 * A license document that applies to this structured data, typically indicated by URL.
	 *
	 * @property sdLicense
	 * @type CreativeWork
	 */
	sdLicense;

	/**
	 * Schema.org/encodingFormat
	 * Media type typically expressed using a MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml) and [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).

In cases where a [[CreativeWork]] has several media type representations, [[encoding]] can be used to indicate each [[MediaObject]] alongside particular [[encodingFormat]] information.

Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
	 *
	 * @property encodingFormat
	 * @type URL
	 */
	encodingFormat;

	/**
	 * Schema.org/materialExtent
	 * The quantity of the materials being described or an expression of the physical space they occupy.
	 *
	 * @property materialExtent
	 * @type Text
	 */
	materialExtent;

	/**
	 * Schema.org/creditText
	 * Text that can be used to credit person(s) and/or organization(s) associated with a published Creative Work.
	 *
	 * @property creditText
	 * @type Text
	 */
	creditText;

	/**
	 * Schema.org/learningResourceType
	 * The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.
	 *
	 * @property learningResourceType
	 * @type Text
	 */
	learningResourceType;

	/**
	 * Schema.org/teaches
	 * The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.
	 *
	 * @property teaches
	 * @type Text
	 */
	teaches;

	/**
	 * Schema.org/about
	 * The subject matter of the content.
	 *
	 * @property about
	 * @type Thing
	 */
	about;

	/**
	 * Schema.org/inLanguage
	 * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
	 *
	 * @property inLanguage
	 * @type Language
	 */
	inLanguage;

	/**
	 * Schema.org/assesses
	 * The item being described is intended to assess the competency or learning outcome defined by the referenced term.
	 *
	 * @property assesses
	 * @type Text
	 */
	assesses;

	/**
	 * Schema.org/acquireLicensePage
	 * Indicates a page documenting how licenses can be purchased or otherwise acquired, for the current item.
	 *
	 * @property acquireLicensePage
	 * @type URL
	 */
	acquireLicensePage;

	/**
	 * Schema.org/releasedEvent
	 * The place and time the release was issued, expressed as a PublicationEvent.
	 *
	 * @property releasedEvent
	 * @type PublicationEvent
	 */
	releasedEvent;

	/**
	 * Schema.org/audio
	 * An embedded audio object.
	 *
	 * @property audio
	 * @type Clip
	 */
	audio;

	/**
	 * Schema.org/accessibilityFeature
	 * Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
	 *
	 * @property accessibilityFeature
	 * @type Text
	 */
	accessibilityFeature;

	/**
	 * Schema.org/comment
	 * Comments, typically from users.
	 *
	 * @property comment
	 * @type Comment
	 */
	comment;

	/**
	 * Schema.org/hasPart
	 * Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).
	 *
	 * @property hasPart
	 * @type CreativeWork
	 */
	hasPart;

	/**
	 * Schema.org/associatedMedia
	 * A media object that encodes this CreativeWork. This property is a synonym for encoding.
	 *
	 * @property associatedMedia
	 * @type MediaObject
	 */
	associatedMedia;

	/**
	 * Schema.org/position
	 * The position of an item in a series or sequence of items.
	 *
	 * @property position
	 * @type Integer
	 */
	position;

	/**
	 * Schema.org/creativeWorkStatus
	 * The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle.
	 *
	 * @property creativeWorkStatus
	 * @type DefinedTerm
	 */
	creativeWorkStatus;

	/**
	 * Schema.org/isBasedOnUrl
	 * A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.
	 *
	 * @property isBasedOnUrl
	 * @type URL
	 */
	isBasedOnUrl;

	/**
	 * Schema.org/material
	 * A material that something is made from, e.g. leather, wool, cotton, paper.
	 *
	 * @property material
	 * @type Product
	 */
	material;

	/**
	 * Schema.org/funder
	 * A person or organization that supports (sponsors) something through some kind of financial contribution.
	 *
	 * @property funder
	 * @type Organization
	 */
	funder;

	/**
	 * Schema.org/publishingPrinciples
	 * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].

While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.

	 *
	 * @property publishingPrinciples
	 * @type CreativeWork
	 */
	publishingPrinciples;

	/**
	 * Schema.org/awards
	 * Awards won by or for this item.
	 *
	 * @property awards
	 * @type Text
	 */
	awards;

	/**
	 * Schema.org/editor
	 * Specifies the Person who edited the CreativeWork.
	 *
	 * @property editor
	 * @type Person
	 */
	editor;

	/**
	 * Schema.org/workExample
	 * Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook.
	 *
	 * @property workExample
	 * @type CreativeWork
	 */
	workExample;

	/**
	 * Schema.org/audience
	 * An intended audience, i.e. a group for whom something was created.
	 *
	 * @property audience
	 * @type Audience
	 */
	audience;

	/**
	 * Schema.org/correction
	 * Indicates a correction to a [[CreativeWork]], either via a [[CorrectionComment]], textually or in another document.
	 *
	 * @property correction
	 * @type CorrectionComment
	 */
	correction;

	/**
	 * Schema.org/keywords
	 * Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas.
	 *
	 * @property keywords
	 * @type DefinedTerm
	 */
	keywords;

	/**
	 * Schema.org/publisherImprint
	 * The publishing division which published the comic.
	 *
	 * @property publisherImprint
	 * @type Organization
	 */
	publisherImprint;

	/**
	 * Schema.org/isBasedOn
	 * A resource from which this work is derived or from which it is a modification or adaption.
	 *
	 * @property isBasedOn
	 * @type CreativeWork
	 */
	isBasedOn;

	/**
	 * Schema.org/typicalAgeRange
	 * The typical expected age range, e.g. '7-9', '11-'.
	 *
	 * @property typicalAgeRange
	 * @type Text
	 */
	typicalAgeRange;

}