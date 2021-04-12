/**
 * Schema.org/CategoryCodeSet
 * A set of Category Code values.
 *
 * @author schema.org
 * @class CategoryCodeSet
 * @module org.schema
 */
public class CategoryCodeSet extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "CategoryCodeSet";
	}

}