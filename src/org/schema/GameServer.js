/**
 * Schema.org/GameServer
 * Server that provides game interaction in a multiplayer game.
 *
 * @author schema.org
 * @class GameServer
 * @module org.schema
 */
public class GameServer extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "GameServer";
	}

}