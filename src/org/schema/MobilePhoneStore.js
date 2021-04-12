/**
 * Schema.org/MobilePhoneStore
 * A store that sells mobile phones and related accessories.
 *
 * @author schema.org
 * @class MobilePhoneStore
 * @module org.schema
 */
public class MobilePhoneStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MobilePhoneStore";
	}

}