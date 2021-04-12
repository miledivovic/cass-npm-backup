/**
 * Schema.org/ShoeStore
 * A shoe store.
 *
 * @author schema.org
 * @class ShoeStore
 * @module org.schema
 */
public class ShoeStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ShoeStore";
	}

}