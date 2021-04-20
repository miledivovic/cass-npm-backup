/**
 * Schema.org/MusicComposition
 * A musical composition.
 *
 * @author schema.org
 * @class MusicComposition
 * @module org.schema
 */
module.exports = class MusicComposition extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MusicComposition");
	}

}