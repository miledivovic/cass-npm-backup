/**
 * Schema.org/MusicGroup
 * A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.
 *
 * @author schema.org
 * @class MusicGroup
 * @module org.schema
 */
public class MusicGroup extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MusicGroup";
	}

}