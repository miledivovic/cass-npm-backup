const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/HyperTocEntry
 * A HyperToEntry is an item within a [[HyperToc]], which represents a hypertext table of contents for complex media objects, such as [[VideoObject]], [[AudioObject]]. The media object itself is indicated using [[associatedMedia]]. Each section of interest within that content can be described with a [[HyperTocEntry]], with associated [[startOffset]] and [[endOffset]]. When several entries are all from the same file, [[associatedMedia]] is used on the overarching [[HyperTocEntry]]; if the content has been split into multiple files, they can be referenced using [[associatedMedia]] on each [[HyperTocEntry]].
 *
 * @author schema.org
 * @class HyperTocEntry
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class HyperTocEntry extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HyperTocEntry");
	}

	/**
	 * Schema.org/tocContinuation
	 * A [[HyperTocEntry]] can have a [[tocContinuation]] indicated, which is another [[HyperTocEntry]] that would be the default next item to play or render.
	 *
	 * @property tocContinuation
	 * @type HyperTocEntry
	 */
	tocContinuation;

	/**
	 * Schema.org/utterances
	 * Text of an utterances (spoken words, lyrics etc.) that occurs at a certain section of a media object, represented as a [[HyperTocEntry]].
	 *
	 * @property utterances
	 * @type Text
	 */
	utterances;

	/**
	 * Schema.org/associatedMedia
	 * A media object that encodes this CreativeWork. This property is a synonym for encoding.
	 *
	 * @property associatedMedia
	 * @type MediaObject
	 */
	associatedMedia;

}