/**
 * Schema.org/MovingCompany
 * A moving company.
 *
 * @author schema.org
 * @class MovingCompany
 * @module org.schema
 */
public class MovingCompany extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MovingCompany";
	}

}