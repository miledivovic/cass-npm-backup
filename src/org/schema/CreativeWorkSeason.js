/**
 *  Schema.org/CreativeWorkSeason
 *  A media season e.g. tv, radio, video game etc.
 * 
 *  @author schema.org
 *  @class CreativeWorkSeason
 *  @module org.schema
 *  @extends CreativeWork
 */
var CreativeWorkSeason = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "CreativeWorkSeason";
};
CreativeWorkSeason = stjs.extend(CreativeWorkSeason, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/actor
     *  An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property actor
     *  @type Person
     */
    actor = null;
    /**
     *  Schema.org/partOfSeries
     *  The series to which this episode or season belongs.
     * 
     *  @property partOfSeries
     *  @type CreativeWorkSeries
     */
    partOfSeries = null;
    /**
     *  Schema.org/numberOfEpisodes
     *  The number of episodes in this season or series.
     * 
     *  @property numberOfEpisodes
     *  @type Integer
     */
    numberOfEpisodes = null;
    /**
     *  Schema.org/trailer
     *  The trailer of a movie or tv/radio series, season, episode, etc.
     * 
     *  @property trailer
     *  @type VideoObject
     */
    trailer = null;
    /**
     *  Schema.org/endDate
     *  The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     * 
     *  @property endDate
     *  @type DateTime
     */
    endDate = null;
    /**
     *  Schema.org/episodes
     *  An episode of a TV/radio series or season.
     * 
     *  @property episodes
     *  @type Episode
     */
    episodes = null;
    /**
     *  Schema.org/startDate
     *  The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     * 
     *  @property startDate
     *  @type Date
     */
    startDate = null;
    /**
     *  Schema.org/director
     *  A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property director
     *  @type Person
     */
    director = null;
    /**
     *  Schema.org/productionCompany
     *  The production company or studio responsible for the item e.g. series, video game, episode etc.
     * 
     *  @property productionCompany
     *  @type Organization
     */
    productionCompany = null;
    /**
     *  Schema.org/episode
     *  An episode of a tv, radio or game media within a series or season.
     * 
     *  @property episode
     *  @type Episode
     */
    episode = null;
    /**
     *  Schema.org/seasonNumber
     *  Position of the season within an ordered group of seasons.
     * 
     *  @property seasonNumber
     *  @type Text
     */
    seasonNumber = null;
}, {actor: "Person", partOfSeries: "CreativeWorkSeries", trailer: "VideoObject", episodes: "Episode", director: "Person", productionCompany: "Organization", episode: "Episode", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
