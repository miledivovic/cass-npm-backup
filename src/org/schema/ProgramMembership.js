/**
 * Schema.org/ProgramMembership
 * Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 *
 * @author schema.org
 * @class ProgramMembership
 * @module org.schema
 */
public class ProgramMembership extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ProgramMembership";
	}

}