/**
 * Schema.org/GameServerStatus
 * Status of a game server.
 *
 * @author schema.org
 * @class GameServerStatus
 * @module org.schema
 */
public class GameServerStatus extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "GameServerStatus";
	}

}