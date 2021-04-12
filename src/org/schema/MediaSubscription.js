/**
 * Schema.org/MediaSubscription
 * A subscription which allows a user to access media including audio, video, books, etc.
 *
 * @author schema.org
 * @class MediaSubscription
 * @module org.schema
 */
public class MediaSubscription extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MediaSubscription";
	}

}