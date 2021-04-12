/**
 * Schema.org/GamePlayMode
 * Indicates whether this game is multi-player, co-op or single-player.
 *
 * @author schema.org
 * @class GamePlayMode
 * @module org.schema
 */
public class GamePlayMode extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "GamePlayMode";
	}

}