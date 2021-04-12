/**
 * Schema.org/Audience
 * Intended audience for an item, i.e. the group for whom the item was created.
 *
 * @author schema.org
 * @class Audience
 * @module org.schema
 */
public class Audience extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Audience";
	}

}