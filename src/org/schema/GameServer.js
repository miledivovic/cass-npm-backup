const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/GameServer
 * Server that provides game interaction in a multiplayer game.
 *
 * @author schema.org
 * @class GameServer
 * @module org.schema
 * @extends Intangible
 */
module.exports = class GameServer extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GameServer");
	}

	/**
	 * Schema.org/serverStatus
	 * Status of a game server.
	 *
	 * @property serverStatus
	 * @type GameServerStatus
	 */
	serverStatus;

	/**
	 * Schema.org/game
	 * Video game which is played on this server.
	 *
	 * @property game
	 * @type VideoGame
	 */
	game;

	/**
	 * Schema.org/playersOnline
	 * Number of players on the server.
	 *
	 * @property playersOnline
	 * @type Integer
	 */
	playersOnline;

}