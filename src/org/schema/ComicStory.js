/**
 * Schema.org/ComicStory
 * The term "story" is any indivisible, re-printable
		unit of a comic, including the interior stories, covers, and backmatter. Most
		comics have at least two stories: a cover (ComicCoverArt) and an interior story.
 *
 * @author schema.org
 * @class ComicStory
 * @module org.schema
 */
module.exports = class ComicStory extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ComicStory");
	}
};
