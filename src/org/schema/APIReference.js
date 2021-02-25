/**
 *  Schema.org/APIReference
 *  Reference documentation for application programming interfaces (APIs).
 * 
 *  @author schema.org
 *  @class APIReference
 *  @module org.schema
 *  @extends TechArticle
 */
var APIReference = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    TechArticle.call(this);
    this.context = "http://schema.org/";
    this.type = "APIReference";
};
APIReference = stjs.extend(APIReference, TechArticle, [], function(constructor, prototype) {
    /**
     *  Schema.org/executableLibraryName
     *  Library file name e.g., mscorlib.dll, system.web.dll.
     * 
     *  @property executableLibraryName
     *  @type Text
     */
    prototype.executableLibraryName = null;
    /**
     *  Schema.org/assemblyVersion
     *  Associated product/technology version. e.g., .NET Framework 4.5.
     * 
     *  @property assemblyVersion
     *  @type Text
     */
    prototype.assemblyVersion = null;
    /**
     *  Schema.org/programmingModel
     *  Indicates whether API is managed or unmanaged.
     * 
     *  @property programmingModel
     *  @type Text
     */
    prototype.programmingModel = null;
    /**
     *  Schema.org/assembly
     *  Library file name e.g., mscorlib.dll, system.web.dll.
     * 
     *  @property assembly
     *  @type Text
     */
    prototype.assembly = null;
    /**
     *  Schema.org/targetPlatform
     *  Type of app development: phone, Metro style, desktop, XBox, etc.
     * 
     *  @property targetPlatform
     *  @type Text
     */
    prototype.targetPlatform = null;
}, {about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
