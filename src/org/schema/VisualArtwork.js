/**
 *  Schema.org/VisualArtwork
 *  A work of art that is primarily visual in character.
 * 
 *  @author schema.org
 *  @class VisualArtwork
 *  @module org.schema
 *  @extends CreativeWork
 */
var VisualArtwork = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "VisualArtwork";
};
VisualArtwork = stjs.extend(VisualArtwork, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/height
     *  The height of the item.
     * 
     *  @property height
     *  @type Distance
     */
    prototype.height = null;
    /**
     *  Schema.org/artMedium
     *  The material used. (e.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.)
     * 
     *  @property artMedium
     *  @type Text
     */
    prototype.artMedium = null;
    /**
     *  Schema.org/artform
     *  e.g. Painting, Drawing, Sculpture, Print, Photograph, Assemblage, Collage, etc.
     * 
     *  @property artform
     *  @type Text
     */
    prototype.artform = null;
    /**
     *  Schema.org/artworkSurface
     *  The supporting materials for the artwork, e.g. Canvas, Paper, Wood, Board, etc.
     * 
     *  @property artworkSurface
     *  @type Text
     */
    prototype.artworkSurface = null;
    /**
     *  Schema.org/artEdition
     *  The number of copies when multiple copies of a piece of artwork are produced - e.g. for a limited edition of 20 prints, 'artEdition' refers to the total number of copies (in this example "20").
     * 
     *  @property artEdition
     *  @type Integer
     */
    prototype.artEdition = null;
    /**
     *  Schema.org/width
     *  The width of the item.
     * 
     *  @property width
     *  @type Distance
     */
    prototype.width = null;
    /**
     *  Schema.org/surface
     *  A material used as a surface in some artwork, e.g. Canvas, Paper, Wood, Board, etc.
     * 
     *  @property surface
     *  @type Text
     */
    prototype.surface = null;
    /**
     *  Schema.org/depth
     *  The depth of the item.
     * 
     *  @property depth
     *  @type Distance
     */
    prototype.depth = null;
}, {height: "Distance", width: "Distance", depth: "Distance", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
