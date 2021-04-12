/**
 * Schema.org/Festival
 * Event type: Festival.
 *
 * @author schema.org
 * @class Festival
 * @module org.schema
 */
public class Festival extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Festival";
	}

}