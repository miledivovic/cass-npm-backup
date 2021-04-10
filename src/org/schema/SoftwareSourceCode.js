/**
 *  Schema.org/SoftwareSourceCode
 *  Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.
 * 
 *  @author schema.org
 *  @class SoftwareSourceCode
 *  @module org.schema
 *  @extends CreativeWork
 */
var SoftwareSourceCode = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "SoftwareSourceCode";
};
SoftwareSourceCode = stjs.extend(SoftwareSourceCode, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/targetProduct
     *  Target Operating System / Product to which the code applies.  If applies to several versions, just the product name can be used.
     * 
     *  @property targetProduct
     *  @type SoftwareApplication
     */
    targetProduct = null;
    /**
     *  Schema.org/codeRepository
     *  Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex).
     * 
     *  @property codeRepository
     *  @type URL
     */
    codeRepository = null;
    /**
     *  Schema.org/programmingLanguage
     *  The computer programming language.
     * 
     *  @property programmingLanguage
     *  @type Text
     */
    programmingLanguage = null;
    /**
     *  Schema.org/codeSampleType
     *  What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.
     * 
     *  @property codeSampleType
     *  @type Text
     */
    codeSampleType = null;
    /**
     *  Schema.org/runtimePlatform
     *  Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).
     * 
     *  @property runtimePlatform
     *  @type Text
     */
    runtimePlatform = null;
    /**
     *  Schema.org/sampleType
     *  What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.
     * 
     *  @property sampleType
     *  @type Text
     */
    sampleType = null;
    /**
     *  Schema.org/runtime
     *  Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).
     * 
     *  @property runtime
     *  @type Text
     */
    runtime = null;
}, {targetProduct: "SoftwareApplication", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
