/**
 * Schema.org/CoverArt
 * The artwork on the outer surface of a CreativeWork.
 *
 * @author schema.org
 * @class CoverArt
 * @module org.schema
 */
public class CoverArt extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "CoverArt";
	}

}