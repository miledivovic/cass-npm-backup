const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/ComicStory
 * The term "story" is any indivisible, re-printable
    	unit of a comic, including the interior stories, covers, and backmatter. Most
    	comics have at least two stories: a cover (ComicCoverArt) and an interior story.
 *
 * @author schema.org
 * @class ComicStory
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class ComicStory extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ComicStory");
	}

	/**
	 * Schema.org/penciler
	 * The individual who draws the primary narrative artwork.
	 *
	 * @property penciler
	 * @type Person
	 */
	penciler;

	/**
	 * Schema.org/artist
	 * The primary artist for a work
    	in a medium other than pencils or digital line art--for example, if the
    	primary artwork is done in watercolors or digital paints.
	 *
	 * @property artist
	 * @type Person
	 */
	artist;

	/**
	 * Schema.org/inker
	 * The individual who traces over the pencil drawings in ink after pencils are complete.
	 *
	 * @property inker
	 * @type Person
	 */
	inker;

	/**
	 * Schema.org/letterer
	 * The individual who adds lettering, including speech balloons and sound effects, to artwork.
	 *
	 * @property letterer
	 * @type Person
	 */
	letterer;

	/**
	 * Schema.org/colorist
	 * The individual who adds color to inked drawings.
	 *
	 * @property colorist
	 * @type Person
	 */
	colorist;

}