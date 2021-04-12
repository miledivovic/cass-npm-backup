/**
 * Schema.org/School
 * A school.
 *
 * @author schema.org
 * @class School
 * @module org.schema
 */
public class School extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "School";
	}

}