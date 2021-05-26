const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/VisualArtwork
 * A work of art that is primarily visual in character.
 *
 * @author schema.org
 * @class VisualArtwork
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class VisualArtwork extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","VisualArtwork");
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
	 * Schema.org/artworkSurface
	 * The supporting materials for the artwork, e.g. Canvas, Paper, Wood, Board, etc.
	 *
	 * @property artworkSurface
	 * @type URL
	 */
	artworkSurface;

	/**
	 * Schema.org/artform
	 * e.g. Painting, Drawing, Sculpture, Print, Photograph, Assemblage, Collage, etc.
	 *
	 * @property artform
	 * @type Text
	 */
	artform;

	/**
	 * Schema.org/depth
	 * The depth of the item.
	 *
	 * @property depth
	 * @type Distance
	 */
	depth;

	/**
	 * Schema.org/height
	 * The height of the item.
	 *
	 * @property height
	 * @type Distance
	 */
	height;

	/**
	 * Schema.org/inker
	 * The individual who traces over the pencil drawings in ink after pencils are complete.
	 *
	 * @property inker
	 * @type Person
	 */
	inker;

	/**
	 * Schema.org/width
	 * The width of the item.
	 *
	 * @property width
	 * @type QuantitativeValue
	 */
	width;

	/**
	 * Schema.org/artMedium
	 * The material used. (e.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.)
	 *
	 * @property artMedium
	 * @type Text
	 */
	artMedium;

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

	/**
	 * Schema.org/surface
	 * A material used as a surface in some artwork, e.g. Canvas, Paper, Wood, Board, etc.
	 *
	 * @property surface
	 * @type URL
	 */
	surface;

	/**
	 * Schema.org/artEdition
	 * The number of copies when multiple copies of a piece of artwork are produced - e.g. for a limited edition of 20 prints, 'artEdition' refers to the total number of copies (in this example "20").
	 *
	 * @property artEdition
	 * @type Integer
	 */
	artEdition;

}