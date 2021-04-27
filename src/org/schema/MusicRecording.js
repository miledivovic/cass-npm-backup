/**
 * Schema.org/MusicRecording
 * A music recording (track), usually a single song.
 *
 * @author schema.org
 * @class MusicRecording
 * @module org.schema
 */
module.exports = class MusicRecording extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MusicRecording");
	}
};
