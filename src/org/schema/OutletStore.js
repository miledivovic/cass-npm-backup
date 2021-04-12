/**
 * Schema.org/OutletStore
 * An outlet store.
 *
 * @author schema.org
 * @class OutletStore
 * @module org.schema
 */
public class OutletStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "OutletStore";
	}

}