/**
 * Schema.org/IgnoreAction
 * The act of intentionally disregarding the object. An agent ignores an object.
 *
 * @author schema.org
 * @class IgnoreAction
 * @module org.schema
 */
public class IgnoreAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "IgnoreAction";
	}

}