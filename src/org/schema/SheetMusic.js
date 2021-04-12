/**
 * Schema.org/SheetMusic
 * Printed music, as opposed to performed or recorded music.
 *
 * @author schema.org
 * @class SheetMusic
 * @module org.schema
 */
public class SheetMusic extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SheetMusic";
	}

}