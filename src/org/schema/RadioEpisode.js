/**
 * Schema.org/RadioEpisode
 * A radio episode which can be part of a series or season.
 *
 * @author schema.org
 * @class RadioEpisode
 * @module org.schema
 */
module.exports = class RadioEpisode extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "RadioEpisode");
	}
};
