/**
 * Schema.org/DepartAction
 * The act of  departing from a place. An agent departs from an fromLocation for a destination, optionally with participants.
 *
 * @author schema.org
 * @class DepartAction
 * @module org.schema
 */
public class DepartAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DepartAction";
	}

}