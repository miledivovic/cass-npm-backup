/**
 *  Schema.org/TVSeries
 *  CreativeWorkSeries dedicated to TV broadcast and associated online delivery.
 * 
 *  @author schema.org
 *  @class TVSeries
 *  @module org.schema
 *  @extends CreativeWork
 */
var TVSeries = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "TVSeries";
};
TVSeries = stjs.extend(TVSeries, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/seasons
     *  A season in a media series.
     * 
     *  @property seasons
     *  @type CreativeWorkSeason
     */
    prototype.seasons = null;
    /**
     *  Schema.org/actor
     *  An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property actor
     *  @type Person
     */
    prototype.actor = null;
    /**
     *  Schema.org/numberOfEpisodes
     *  The number of episodes in this season or series.
     * 
     *  @property numberOfEpisodes
     *  @type Integer
     */
    prototype.numberOfEpisodes = null;
    /**
     *  Schema.org/trailer
     *  The trailer of a movie or tv/radio series, season, episode, etc.
     * 
     *  @property trailer
     *  @type VideoObject
     */
    prototype.trailer = null;
    /**
     *  Schema.org/season
     *  A season in a media series.
     * 
     *  @property season
     *  @type CreativeWorkSeason
     */
    prototype.season = null;
    /**
     *  Schema.org/episodes
     *  An episode of a TV/radio series or season.
     * 
     *  @property episodes
     *  @type Episode
     */
    prototype.episodes = null;
    /**
     *  Schema.org/countryOfOrigin
     *  The country of the principal offices of the production company or individual responsible for the movie or program.
     * 
     *  @property countryOfOrigin
     *  @type Country
     */
    prototype.countryOfOrigin = null;
    /**
     *  Schema.org/musicBy
     *  The composer of the soundtrack.
     * 
     *  @property musicBy
     *  @type Person
     */
    prototype.musicBy = null;
    /**
     *  Schema.org/containsSeason
     *  A season that is part of the media series.
     * 
     *  @property containsSeason
     *  @type CreativeWorkSeason
     */
    prototype.containsSeason = null;
    /**
     *  Schema.org/directors
     *  A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property directors
     *  @type Person
     */
    prototype.directors = null;
    /**
     *  Schema.org/numberOfSeasons
     *  The number of seasons in this series.
     * 
     *  @property numberOfSeasons
     *  @type Integer
     */
    prototype.numberOfSeasons = null;
    /**
     *  Schema.org/director
     *  A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property director
     *  @type Person
     */
    prototype.director = null;
    /**
     *  Schema.org/productionCompany
     *  The production company or studio responsible for the item e.g. series, video game, episode etc.
     * 
     *  @property productionCompany
     *  @type Organization
     */
    prototype.productionCompany = null;
    /**
     *  Schema.org/actors
     *  An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property actors
     *  @type Person
     */
    prototype.actors = null;
    /**
     *  Schema.org/episode
     *  An episode of a tv, radio or game media within a series or season.
     * 
     *  @property episode
     *  @type Episode
     */
    prototype.episode = null;
}, {seasons: "CreativeWorkSeason", actor: "Person", trailer: "VideoObject", season: "CreativeWorkSeason", episodes: "Episode", countryOfOrigin: "Country", musicBy: "Person", containsSeason: "CreativeWorkSeason", directors: "Person", director: "Person", productionCompany: "Organization", actors: "Person", episode: "Episode", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
