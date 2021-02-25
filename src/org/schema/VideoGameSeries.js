/**
 *  Schema.org/VideoGameSeries
 *  A video game series.
 * 
 *  @author schema.org
 *  @class VideoGameSeries
 *  @module org.schema
 *  @extends CreativeWorkSeries
 */
var VideoGameSeries = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWorkSeries.call(this);
    this.context = "http://schema.org/";
    this.type = "VideoGameSeries";
};
VideoGameSeries = stjs.extend(VideoGameSeries, CreativeWorkSeries, [], function(constructor, prototype) {
    /**
     *  Schema.org/gameItem
     *  An item is an object within the game world that can be collected by a player or, occasionally, a non-player character.
     * 
     *  @property gameItem
     *  @type Thing
     */
    prototype.gameItem = null;
    /**
     *  Schema.org/seasons
     *  A season in a media series.
     * 
     *  @property seasons
     *  @type CreativeWorkSeason
     */
    prototype.seasons = null;
    /**
     *  Schema.org/gamePlatform
     *  The electronic systems used to play <a href="http://en.wikipedia.org/wiki/Category:Video_game_platforms">video games</a>.
     * 
     *  @property gamePlatform
     *  @type Text
     */
    prototype.gamePlatform = null;
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
     *  Schema.org/cheatCode
     *  Cheat codes to the game.
     * 
     *  @property cheatCode
     *  @type CreativeWork
     */
    prototype.cheatCode = null;
    /**
     *  Schema.org/characterAttribute
     *  A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage).
     * 
     *  @property characterAttribute
     *  @type Thing
     */
    prototype.characterAttribute = null;
    /**
     *  Schema.org/gameLocation
     *  Real or fictional location of the game (or part of game).
     * 
     *  @property gameLocation
     *  @type URL
     */
    prototype.gameLocation = null;
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
     *  Schema.org/quest
     *  The task that a player-controlled character, or group of characters may complete in order to gain a reward.
     * 
     *  @property quest
     *  @type Thing
     */
    prototype.quest = null;
    /**
     *  Schema.org/playMode
     *  Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time.
     * 
     *  @property playMode
     *  @type GamePlayMode
     */
    prototype.playMode = null;
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
     *  Schema.org/numberOfPlayers
     *  Indicate how many people can play this game (minimum, maximum, or range).
     * 
     *  @property numberOfPlayers
     *  @type QuantitativeValue
     */
    prototype.numberOfPlayers = null;
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
}, {gameItem: "Thing", seasons: "CreativeWorkSeason", actor: "Person", trailer: "VideoObject", season: "CreativeWorkSeason", episodes: "Episode", cheatCode: "CreativeWork", characterAttribute: "Thing", musicBy: "Person", containsSeason: "CreativeWorkSeason", directors: "Person", quest: "Thing", playMode: "GamePlayMode", director: "Person", productionCompany: "Organization", numberOfPlayers: "QuantitativeValue", actors: "Person", episode: "Episode", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
