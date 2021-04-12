/**
 * Schema.org/Enumeration
 * Lists or enumerations—for example, a list of cuisines or music genres, etc.
 *
 * @author schema.org
 * @class Enumeration
 * @module org.schema
 */
public class Enumeration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Enumeration";
	}

}