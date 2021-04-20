/**
 * Schema.org/SheetMusic
 * Printed music, as opposed to performed or recorded music.
 *
 * @author schema.org
 * @class SheetMusic
 * @module org.schema
 */
module.exports = class SheetMusic extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SheetMusic");
	}

}