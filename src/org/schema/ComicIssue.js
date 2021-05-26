const schema = {};
schema.PublicationIssue = require("./PublicationIssue.js");
/**
 * Schema.org/ComicIssue
 * Individual comic issues are serially published as
    	part of a larger series. For the sake of consistency, even one-shot issues
    	belong to a series comprised of a single issue. All comic issues can be
    	uniquely identified by: the combination of the name and volume number of the
    	series to which the issue belongs; the issue number; and the variant
    	description of the issue (if any).
 *
 * @author schema.org
 * @class ComicIssue
 * @module org.schema
 * @extends PublicationIssue
 */
module.exports = class ComicIssue extends schema.PublicationIssue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ComicIssue");
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
	 * Schema.org/variantCover
	 * A description of the variant cover
    	for the issue, if the issue is a variant printing. For example, "Bryan Hitch
    	Variant Cover" or "2nd Printing Variant".
	 *
	 * @property variantCover
	 * @type Text
	 */
	variantCover;

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