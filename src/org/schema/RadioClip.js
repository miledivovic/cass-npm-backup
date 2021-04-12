/**
 * Schema.org/RadioClip
 * A short radio program or a segment/part of a radio program.
 *
 * @author schema.org
 * @class RadioClip
 * @module org.schema
 */
public class RadioClip extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "RadioClip";
	}

}