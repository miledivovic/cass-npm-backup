/**
 * Schema.org/MusicVenue
 * A music venue.
 *
 * @author schema.org
 * @class MusicVenue
 * @module org.schema
 */
public class MusicVenue extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MusicVenue";
	}

}