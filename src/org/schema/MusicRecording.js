/**
 * Schema.org/MusicRecording
 * A music recording (track), usually a single song.
 *
 * @author schema.org
 * @class MusicRecording
 * @module org.schema
 */
public class MusicRecording extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MusicRecording";
	}

}