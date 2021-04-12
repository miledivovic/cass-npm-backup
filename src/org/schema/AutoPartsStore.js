/**
 * Schema.org/AutoPartsStore
 * An auto parts store.
 *
 * @author schema.org
 * @class AutoPartsStore
 * @module org.schema
 * @extends AutomotiveBusiness
 */
public class AutoPartsStore extends schema.AutomotiveBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AutoPartsStore";
	}

}