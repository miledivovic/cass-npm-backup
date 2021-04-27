/**
 * Schema.org/Person
 * A person (alive, dead, undead, or fictional).
 *
 * @author schema.org
 * @class Person
 * @module org.schema
 */
module.exports = class Person extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Person");
	}
};
