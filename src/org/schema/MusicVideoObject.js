/**
 * Schema.org/MusicVideoObject
 * A music video file.
 *
 * @author schema.org
 * @class MusicVideoObject
 * @module org.schema
 */
public class MusicVideoObject extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MusicVideoObject";
	}

}