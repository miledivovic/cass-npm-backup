/**
 * Schema.org/PostOffice
 * A post office.
 *
 * @author schema.org
 * @class PostOffice
 * @module org.schema
 */
public class PostOffice extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PostOffice";
	}

}