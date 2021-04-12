/**
 * Schema.org/ShortStory
 * Short story or tale. A brief work of literature, usually written in narrative prose.
 *
 * @author schema.org
 * @class ShortStory
 * @module org.schema
 */
module.exports = class ShortStory extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ShortStory";
	}

}