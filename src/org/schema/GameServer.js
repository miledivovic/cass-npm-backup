/**
 *  Schema.org/GameServer
 *  Server that provides game interaction in a multiplayer game.
 * 
 *  @author schema.org
 *  @class GameServer
 *  @module org.schema
 *  @extends Intangible
 */
var GameServer = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "GameServer";
};
GameServer = stjs.extend(GameServer, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/game
     *  Video game which is played on this server.
     * 
     *  @property game
     *  @type VideoGame
     */
    game = null;
    /**
     *  Schema.org/playersOnline
     *  Number of players on the server.
     * 
     *  @property playersOnline
     *  @type Integer
     */
    playersOnline = null;
    /**
     *  Schema.org/serverStatus
     *  Status of a game server.
     * 
     *  @property serverStatus
     *  @type GameServerStatus
     */
    serverStatus = null;
}, {game: "VideoGame", serverStatus: "GameServerStatus", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
