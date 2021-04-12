/**
 * Schema.org/ConvenienceStore
 * A convenience store.
 *
 * @author schema.org
 * @class ConvenienceStore
 * @module org.schema
 */
public class ConvenienceStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ConvenienceStore";
	}

}