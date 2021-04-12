/**
 * Schema.org/MonetaryGrant
 * A monetary grant.
 *
 * @author schema.org
 * @class MonetaryGrant
 * @module org.schema
 */
public class MonetaryGrant extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MonetaryGrant";
	}

}