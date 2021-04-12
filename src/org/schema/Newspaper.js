/**
 * Schema.org/Newspaper
 * A publication containing information about varied topics that are pertinent to general information, a geographic area, or a specific subject matter (i.e. business, culture, education). Often published daily.
 *
 * @author schema.org
 * @class Newspaper
 * @module org.schema
 */
public class Newspaper extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Newspaper";
	}

}