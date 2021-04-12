/**
 * Schema.org/Occupation
 * A profession, may involve prolonged training and/or a formal qualification.
 *
 * @author schema.org
 * @class Occupation
 * @module org.schema
 */
public class Occupation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Occupation";
	}

}