/**
 * Schema.org/PeopleAudience
 * A set of characteristics belonging to people, e.g. who compose an item's target audience.
 *
 * @author schema.org
 * @class PeopleAudience
 * @module org.schema
 */
public class PeopleAudience extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PeopleAudience";
	}

}