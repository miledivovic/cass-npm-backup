/**
 * Schema.org/MusicRelease
 * A MusicRelease is a specific release of a music album.
 *
 * @author schema.org
 * @class MusicRelease
 * @module org.schema
 */
public class MusicRelease extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MusicRelease";
	}

}