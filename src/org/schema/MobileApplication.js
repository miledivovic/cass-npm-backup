/**
 * Schema.org/MobileApplication
 * A software application designed specifically to work well on a mobile device such as a telephone.
 *
 * @author schema.org
 * @class MobileApplication
 * @module org.schema
 */
public class MobileApplication extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MobileApplication";
	}

}