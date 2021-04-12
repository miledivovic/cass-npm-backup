/**
 * Schema.org/ItemAvailability
 * A list of possible product availability options.
 *
 * @author schema.org
 * @class ItemAvailability
 * @module org.schema
 */
public class ItemAvailability extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ItemAvailability";
	}

}