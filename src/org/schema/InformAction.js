/**
 * Schema.org/InformAction
 * The act of notifying someone of information pertinent to them, with no expectation of a response.
 *
 * @author schema.org
 * @class InformAction
 * @module org.schema
 */
public class InformAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "InformAction";
	}

}