/**
 * Schema.org/PetStore
 * A pet store.
 *
 * @author schema.org
 * @class PetStore
 * @module org.schema
 */
public class PetStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PetStore";
	}

}