/**
 *  Schema.org/VideoGame
 *  A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device.
 * 
 *  @author schema.org
 *  @class VideoGame
 *  @module org.schema
 *  @extends SoftwareApplication
 */
var VideoGame = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    SoftwareApplication.call(this);
    this.context = "http://schema.org/";
    this.type = "VideoGame";
};
VideoGame = stjs.extend(VideoGame, SoftwareApplication, [], function(constructor, prototype) {
    /**
     *  Schema.org/gamePlatform
     *  The electronic systems used to play <a href="http://en.wikipedia.org/wiki/Category:Video_game_platforms">video games</a>.
     * 
     *  @property gamePlatform
     *  @type Text
     */
    gamePlatform = null;
    /**
     *  Schema.org/gameServer
     *  The server on which  it is possible to play the game.
     * 
     *  @property gameServer
     *  @type GameServer
     */
    gameServer = null;
    /**
     *  Schema.org/actor
     *  An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property actor
     *  @type Person
     */
    actor = null;
    /**
     *  Schema.org/trailer
     *  The trailer of a movie or tv/radio series, season, episode, etc.
     * 
     *  @property trailer
     *  @type VideoObject
     */
    trailer = null;
    /**
     *  Schema.org/cheatCode
     *  Cheat codes to the game.
     * 
     *  @property cheatCode
     *  @type CreativeWork
     */
    cheatCode = null;
    /**
     *  Schema.org/gameTip
     *  Links to tips, tactics, etc.
     * 
     *  @property gameTip
     *  @type CreativeWork
     */
    gameTip = null;
    /**
     *  Schema.org/musicBy
     *  The composer of the soundtrack.
     * 
     *  @property musicBy
     *  @type Person
     */
    musicBy = null;
    /**
     *  Schema.org/directors
     *  A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property directors
     *  @type Person
     */
    directors = null;
    /**
     *  Schema.org/playMode
     *  Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time.
     * 
     *  @property playMode
     *  @type GamePlayMode
     */
    playMode = null;
    /**
     *  Schema.org/director
     *  A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property director
     *  @type Person
     */
    director = null;
    /**
     *  Schema.org/actors
     *  An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     * 
     *  @property actors
     *  @type Person
     */
    actors = null;
}, {gameServer: "GameServer", actor: "Person", trailer: "VideoObject", cheatCode: "CreativeWork", gameTip: "CreativeWork", musicBy: "Person", directors: "Person", playMode: "GamePlayMode", director: "Person", actors: "Person", softwareHelp: "CreativeWork", softwareAddOn: "SoftwareApplication", supportingData: "DataFeed", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
