/**
 * Schema.org/ConsumeAction
 * The act of ingesting information/resources/food.
 *
 * @author schema.org
 * @class ConsumeAction
 * @module org.schema
 */
public class ConsumeAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ConsumeAction";
	}

}