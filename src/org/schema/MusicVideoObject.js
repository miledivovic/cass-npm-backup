/**
 * Schema.org/MusicVideoObject
 * A music video file.
 *
 * @author schema.org
 * @class MusicVideoObject
 * @module org.schema
 */
module.exports = class MusicVideoObject extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MusicVideoObject");
	}
};
