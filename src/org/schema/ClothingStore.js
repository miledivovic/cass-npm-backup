/**
 * Schema.org/ClothingStore
 * A clothing store.
 *
 * @author schema.org
 * @class ClothingStore
 * @module org.schema
 */
public class ClothingStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ClothingStore";
	}

}