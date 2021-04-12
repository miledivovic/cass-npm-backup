/**
 * Schema.org/LegalForceStatus
 * A list of possible statuses for the legal force of a legislation.
 *
 * @author schema.org
 * @class LegalForceStatus
 * @module org.schema
 */
public class LegalForceStatus extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "LegalForceStatus";
	}

}