/**
 *  Schema.org/SoftwareApplication
 *  A software application.
 * 
 *  @author schema.org
 *  @class SoftwareApplication
 *  @module org.schema
 *  @extends CreativeWork
 */
var SoftwareApplication = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "SoftwareApplication";
};
SoftwareApplication = stjs.extend(SoftwareApplication, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/downloadUrl
     *  If the file can be downloaded, URL to download the binary.
     * 
     *  @property downloadUrl
     *  @type URL
     */
    downloadUrl = null;
    /**
     *  Schema.org/softwareRequirements
     *  Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).
     * 
     *  @property softwareRequirements
     *  @type Text
     */
    softwareRequirements = null;
    /**
     *  Schema.org/permissions
     *  Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi).
     * 
     *  @property permissions
     *  @type Text
     */
    permissions = null;
    /**
     *  Schema.org/processorRequirements
     *  Processor architecture required to run the application (e.g. IA64).
     * 
     *  @property processorRequirements
     *  @type Text
     */
    processorRequirements = null;
    /**
     *  Schema.org/availableOnDevice
     *  Device required to run the application. Used in cases where a specific make/model is required to run the application.
     * 
     *  @property availableOnDevice
     *  @type Text
     */
    availableOnDevice = null;
    /**
     *  Schema.org/featureList
     *  Features or modules provided by this application (and possibly required by other applications).
     * 
     *  @property featureList
     *  @type URL
     */
    featureList = null;
    /**
     *  Schema.org/applicationSubCategory
     *  Subcategory of the application, e.g. 'Arcade Game'.
     * 
     *  @property applicationSubCategory
     *  @type URL
     */
    applicationSubCategory = null;
    /**
     *  Schema.org/requirements
     *  Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).
     * 
     *  @property requirements
     *  @type Text
     */
    requirements = null;
    /**
     *  Schema.org/device
     *  Device required to run the application. Used in cases where a specific make/model is required to run the application.
     * 
     *  @property device
     *  @type Text
     */
    device = null;
    /**
     *  Schema.org/applicationCategory
     *  Type of software application, e.g. 'Game, Multimedia'.
     * 
     *  @property applicationCategory
     *  @type Text
     */
    applicationCategory = null;
    /**
     *  Schema.org/softwareVersion
     *  Version of the software instance.
     * 
     *  @property softwareVersion
     *  @type Text
     */
    softwareVersion = null;
    /**
     *  Schema.org/storageRequirements
     *  Storage requirements (free space required).
     * 
     *  @property storageRequirements
     *  @type Text
     */
    storageRequirements = null;
    /**
     *  Schema.org/applicationSuite
     *  The name of the application suite to which the application belongs (e.g. Excel belongs to Office).
     * 
     *  @property applicationSuite
     *  @type Text
     */
    applicationSuite = null;
    /**
     *  Schema.org/memoryRequirements
     *  Minimum memory requirements.
     * 
     *  @property memoryRequirements
     *  @type Text
     */
    memoryRequirements = null;
    /**
     *  Schema.org/screenshot
     *  A link to a screenshot image of the app.
     * 
     *  @property screenshot
     *  @type URL
     */
    screenshot = null;
    /**
     *  Schema.org/countriesSupported
     *  Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.
     * 
     *  @property countriesSupported
     *  @type Text
     */
    countriesSupported = null;
    /**
     *  Schema.org/softwareHelp
     *  Software application help.
     * 
     *  @property softwareHelp
     *  @type CreativeWork
     */
    softwareHelp = null;
    /**
     *  Schema.org/softwareAddOn
     *  Additional content for a software application.
     * 
     *  @property softwareAddOn
     *  @type SoftwareApplication
     */
    softwareAddOn = null;
    /**
     *  Schema.org/releaseNotes
     *  Description of what changed in this version.
     * 
     *  @property releaseNotes
     *  @type Text
     */
    releaseNotes = null;
    /**
     *  Schema.org/supportingData
     *  Supporting data for a SoftwareApplication.
     * 
     *  @property supportingData
     *  @type DataFeed
     */
    supportingData = null;
    /**
     *  Schema.org/countriesNotSupported
     *  Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.
     * 
     *  @property countriesNotSupported
     *  @type Text
     */
    countriesNotSupported = null;
    /**
     *  Schema.org/operatingSystem
     *  Operating systems supported (Windows 7, OSX 10.6, Android 1.6).
     * 
     *  @property operatingSystem
     *  @type Text
     */
    operatingSystem = null;
    /**
     *  Schema.org/fileSize
     *  Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed.
     * 
     *  @property fileSize
     *  @type Text
     */
    fileSize = null;
    /**
     *  Schema.org/installUrl
     *  URL at which the app may be installed, if different from the URL of the item.
     * 
     *  @property installUrl
     *  @type URL
     */
    installUrl = null;
}, {softwareHelp: "CreativeWork", softwareAddOn: "SoftwareApplication", supportingData: "DataFeed", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
