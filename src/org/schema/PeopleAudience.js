/**
 * Schema.org/PeopleAudience
 * A set of characteristics belonging to people, e.g. who compose an item's target audience.
 *
 * @author schema.org
 * @class PeopleAudience
 * @module org.schema
 */
module.exports = class PeopleAudience extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PeopleAudience");
	}

}