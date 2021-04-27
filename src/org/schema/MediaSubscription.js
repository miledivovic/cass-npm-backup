/**
 * Schema.org/MediaSubscription
 * A subscription which allows a user to access media including audio, video, books, etc.
 *
 * @author schema.org
 * @class MediaSubscription
 * @module org.schema
 */
module.exports = class MediaSubscription extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MediaSubscription");
	}
};
