/**
 * Schema.org/Notary
 * A notary.
 *
 * @author schema.org
 * @class Notary
 * @module org.schema
 */
public class Notary extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Notary";
	}

}