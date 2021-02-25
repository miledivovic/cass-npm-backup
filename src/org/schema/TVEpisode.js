/**
 *  Schema.org/TVEpisode
 *  A TV episode which can be part of a series or season.
 * 
 *  @author schema.org
 *  @class TVEpisode
 *  @module org.schema
 *  @extends Episode
 */
var TVEpisode = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Episode.call(this);
    this.context = "http://schema.org/";
    this.type = "TVEpisode";
};
TVEpisode = stjs.extend(TVEpisode, Episode, [], function(constructor, prototype) {
    /**
     *  Schema.org/partOfTVSeries
     *  The TV series to which this episode or season belongs.
     * 
     *  @property partOfTVSeries
     *  @type TVSeries
     */
    prototype.partOfTVSeries = null;
    /**
     *  Schema.org/subtitleLanguage
     *  Languages in which subtitles/captions are available, in [IETF BCP 47 standard format](http://tools.ietf.org/html/bcp47).
     * 
     *  @property subtitleLanguage
     *  @type Text
     */
    prototype.subtitleLanguage = null;
    /**
     *  Schema.org/countryOfOrigin
     *  The country of the principal offices of the production company or individual responsible for the movie or program.
     * 
     *  @property countryOfOrigin
     *  @type Country
     */
    prototype.countryOfOrigin = null;
}, {partOfTVSeries: "TVSeries", countryOfOrigin: "Country", actor: "Person", partOfSeries: "CreativeWorkSeries", trailer: "VideoObject", partOfSeason: "CreativeWorkSeason", musicBy: "Person", directors: "Person", director: "Person", productionCompany: "Organization", actors: "Person", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
