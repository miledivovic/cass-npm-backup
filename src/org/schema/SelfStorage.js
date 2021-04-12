/**
 * Schema.org/SelfStorage
 * A self-storage facility.
 *
 * @author schema.org
 * @class SelfStorage
 * @module org.schema
 */
public class SelfStorage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SelfStorage";
	}

}