/**
 * Schema.org/HowToItem
 * An item used as either a tool or supply when performing the instructions for how to to achieve a result.
 *
 * @author schema.org
 * @class HowToItem
 * @module org.schema
 */
public class HowToItem extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HowToItem";
	}

}