/**
 *  Schema.org/Game
 *  The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting.
 * 
 *  @author schema.org
 *  @class Game
 *  @module org.schema
 *  @extends CreativeWork
 */
var Game = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "Game";
};
Game = stjs.extend(Game, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/gameItem
     *  An item is an object within the game world that can be collected by a player or, occasionally, a non-player character.
     * 
     *  @property gameItem
     *  @type Thing
     */
    prototype.gameItem = null;
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
     *  Schema.org/quest
     *  The task that a player-controlled character, or group of characters may complete in order to gain a reward.
     * 
     *  @property quest
     *  @type Thing
     */
    prototype.quest = null;
    /**
     *  Schema.org/numberOfPlayers
     *  Indicate how many people can play this game (minimum, maximum, or range).
     * 
     *  @property numberOfPlayers
     *  @type QuantitativeValue
     */
    prototype.numberOfPlayers = null;
}, {gameItem: "Thing", characterAttribute: "Thing", quest: "Thing", numberOfPlayers: "QuantitativeValue", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
