/**
 * Schema.org/RadioEpisode
 * A radio episode which can be part of a series or season.
 *
 * @author schema.org
 * @class RadioEpisode
 * @module org.schema
 */
public class RadioEpisode extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "RadioEpisode";
	}

}