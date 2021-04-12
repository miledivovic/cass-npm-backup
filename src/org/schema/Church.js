/**
 * Schema.org/Church
 * A church.
 *
 * @author schema.org
 * @class Church
 * @module org.schema
 */
public class Church extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Church";
	}

}