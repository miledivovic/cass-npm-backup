/**
 * Schema.org/ComedyClub
 * A comedy club.
 *
 * @author schema.org
 * @class ComedyClub
 * @module org.schema
 */
public class ComedyClub extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ComedyClub";
	}

}