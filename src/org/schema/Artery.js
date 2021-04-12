/**
 * Schema.org/Artery
 * A type of blood vessel that specifically carries blood away from the heart.
 *
 * @author schema.org
 * @class Artery
 * @module org.schema
 */
public class Artery extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Artery";
	}

}