/**
 * Schema.org/GovernmentPermit
 * A permit issued by a government agency.
 *
 * @author schema.org
 * @class GovernmentPermit
 * @module org.schema
 */
public class GovernmentPermit extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "GovernmentPermit";
	}

}