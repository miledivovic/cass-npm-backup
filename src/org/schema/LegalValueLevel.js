/**
 * Schema.org/LegalValueLevel
 * A list of possible levels for the legal validity of a legislation.
 *
 * @author schema.org
 * @class LegalValueLevel
 * @module org.schema
 */
public class LegalValueLevel extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "LegalValueLevel";
	}

}