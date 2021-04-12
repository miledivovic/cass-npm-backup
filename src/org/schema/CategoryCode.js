/**
 * Schema.org/CategoryCode
 * A Category Code.
 *
 * @author schema.org
 * @class CategoryCode
 * @module org.schema
 */
public class CategoryCode extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "CategoryCode";
	}

}