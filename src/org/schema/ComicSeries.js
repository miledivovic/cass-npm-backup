/**
 * Schema.org/ComicSeries
 * A sequential publication of comic stories under a
    	unifying title, for example "The Amazing Spider-Man" or "Groo the
    	Wanderer".
 *
 * @author schema.org
 * @class ComicSeries
 * @module org.schema
 */
public class ComicSeries extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ComicSeries";
	}

}