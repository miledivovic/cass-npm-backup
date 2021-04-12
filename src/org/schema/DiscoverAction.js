/**
 * Schema.org/DiscoverAction
 * The act of discovering/finding an object.
 *
 * @author schema.org
 * @class DiscoverAction
 * @module org.schema
 */
public class DiscoverAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DiscoverAction";
	}

}