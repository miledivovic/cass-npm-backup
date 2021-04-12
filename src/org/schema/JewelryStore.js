/**
 * Schema.org/JewelryStore
 * A jewelry store.
 *
 * @author schema.org
 * @class JewelryStore
 * @module org.schema
 */
public class JewelryStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "JewelryStore";
	}

}