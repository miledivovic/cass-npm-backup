/**
 * Schema.org/AmpStory
 * A creative work with a visual storytelling format intended to be viewed online, particularly on mobile devices.
 *
 * @author schema.org
 * @class AmpStory
 * @module org.schema
 */
module.exports = class AmpStory extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "AmpStory");
	}
};
