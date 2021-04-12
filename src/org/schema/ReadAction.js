/**
 * Schema.org/ReadAction
 * The act of consuming written content.
 *
 * @author schema.org
 * @class ReadAction
 * @module org.schema
 */
public class ReadAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ReadAction";
	}

}