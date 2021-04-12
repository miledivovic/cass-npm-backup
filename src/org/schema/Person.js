/**
 * Schema.org/Person
 * A person (alive, dead, undead, or fictional).
 *
 * @author schema.org
 * @class Person
 * @module org.schema
 */
public class Person extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Person";
	}

}