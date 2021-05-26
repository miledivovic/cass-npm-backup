const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/HyperToc
 * A HyperToc represents a hypertext table of contents for complex media objects, such as [[VideoObject]], [[AudioObject]]. Items in the table of contents are indicated using the [[tocEntry]] property, and typed [[HyperTocEntry]]. For cases where the same larger work is split into multiple files, [[associatedMedia]] can be used on individual [[HyperTocEntry]] items.
 *
 * @author schema.org
 * @class HyperToc
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class HyperToc extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HyperToc");
	}

	/**
	 * Schema.org/tocEntry
	 * Indicates a [[HyperTocEntry]] in a [[HyperToc]].
	 *
	 * @property tocEntry
	 * @type HyperTocEntry
	 */
	tocEntry;

	/**
	 * Schema.org/associatedMedia
	 * A media object that encodes this CreativeWork. This property is a synonym for encoding.
	 *
	 * @property associatedMedia
	 * @type MediaObject
	 */
	associatedMedia;

}