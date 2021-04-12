/**
 * Schema.org/BowlingAlley
 * A bowling alley.
 *
 * @author schema.org
 * @class BowlingAlley
 * @module org.schema
 */
public class BowlingAlley extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BowlingAlley";
	}

}