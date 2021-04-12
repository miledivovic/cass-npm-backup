/**
 * Schema.org/LegislationObject
 * A specific object or file containing a Legislation. Note that the same Legislation can be published in multiple files. For example, a digitally signed PDF, a plain PDF and an HTML version.
 *
 * @author schema.org
 * @class LegislationObject
 * @module org.schema
 * @extends MediaObject
 */
public class LegislationObject extends schema.MediaObject {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "LegislationObject";
	}

}