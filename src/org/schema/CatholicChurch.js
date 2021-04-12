/**
 * Schema.org/CatholicChurch
 * A Catholic church.
 *
 * @author schema.org
 * @class CatholicChurch
 * @module org.schema
 */
public class CatholicChurch extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "CatholicChurch";
	}

}