/**
 * Schema.org/Mountain
 * A mountain, like Mount Whitney or Mount Everest.
 *
 * @author schema.org
 * @class Mountain
 * @module org.schema
 */
public class Mountain extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Mountain";
	}

}