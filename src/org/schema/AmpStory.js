/**
 * Schema.org/AmpStory
 * A creative work with a visual storytelling format intended to be viewed online, particularly on mobile devices.
 *
 * @author schema.org
 * @class AmpStory
 * @module org.schema
 */
public class AmpStory extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AmpStory";
	}

}