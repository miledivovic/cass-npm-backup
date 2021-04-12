/**
 * Schema.org/MusicComposition
 * A musical composition.
 *
 * @author schema.org
 * @class MusicComposition
 * @module org.schema
 */
public class MusicComposition extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MusicComposition";
	}

}