/**
 * Schema.org/GamePlayMode
 * Indicates whether this game is multi-player, co-op or single-player.
 *
 * @author schema.org
 * @class GamePlayMode
 * @module org.schema
 */
module.exports = class GamePlayMode extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GamePlayMode");
	}

}