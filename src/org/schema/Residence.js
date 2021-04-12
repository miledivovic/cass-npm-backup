/**
 * Schema.org/Residence
 * The place where a person lives.
 *
 * @author schema.org
 * @class Residence
 * @module org.schema
 */
public class Residence extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Residence";
	}

}