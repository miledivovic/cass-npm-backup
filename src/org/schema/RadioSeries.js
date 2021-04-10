/**
 *  Schema.org/RadioSeries
 *  CreativeWorkSeries dedicated to radio broadcast and associated online delivery.
 * 
 *  @author schema.org
 *  @class RadioSeries
 *  @module org.schema
 *  @extends CreativeWorkSeries
 */
var RadioSeries = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWorkSeries.call(this);
    this.context = "http://schema.org/";
    this.type = "RadioSeries";
};
RadioSeries = stjs.extend(RadioSeries, CreativeWorkSeries, [], function(constructor, prototype) {
    /**
     *  Schema.org/seasons
     *  A season in a media series.
     * 
     *  @property seasons
     *  @type CreativeWorkSeason
     */
    seasons = null;
    /**
     *  Schema.org/actor
     *  An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property actor
     *  @type Person
     */
    actor = null;
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
     *  Schema.org/season
     *  A season in a media series.
     * 
     *  @property season
     *  @type CreativeWorkSeason
     */
    season = null;
    /**
     *  Schema.org/episodes
     *  An episode of a TV/radio series or season.
     * 
     *  @property episodes
     *  @type Episode
     */
    episodes = null;
    /**
     *  Schema.org/musicBy
     *  The composer of the soundtrack.
     * 
     *  @property musicBy
     *  @type Person
     */
    musicBy = null;
    /**
     *  Schema.org/containsSeason
     *  A season that is part of the media series.
     * 
     *  @property containsSeason
     *  @type CreativeWorkSeason
     */
    containsSeason = null;
    /**
     *  Schema.org/directors
     *  A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property directors
     *  @type Person
     */
    directors = null;
    /**
     *  Schema.org/numberOfSeasons
     *  The number of seasons in this series.
     * 
     *  @property numberOfSeasons
     *  @type Integer
     */
    numberOfSeasons = null;
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
     *  Schema.org/actors
     *  An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property actors
     *  @type Person
     */
    actors = null;
    /**
     *  Schema.org/episode
     *  An episode of a tv, radio or game media within a series or season.
     * 
     *  @property episode
     *  @type Episode
     */
    episode = null;
}, {seasons: "CreativeWorkSeason", actor: "Person", trailer: "VideoObject", season: "CreativeWorkSeason", episodes: "Episode", musicBy: "Person", containsSeason: "CreativeWorkSeason", directors: "Person", director: "Person", productionCompany: "Organization", actors: "Person", episode: "Episode", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
