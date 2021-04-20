/**
 * Schema.org/TVEpisode
 * A TV episode which can be part of a series or season.
 *
 * @author schema.org
 * @class TVEpisode
 * @module org.schema
 */
module.exports = class TVEpisode extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TVEpisode");
	}

}