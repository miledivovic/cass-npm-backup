/**
 * Schema.org/Hackathon
 * A [hackathon](https://en.wikipedia.org/wiki/Hackathon) event.
 *
 * @author schema.org
 * @class Hackathon
 * @module org.schema
 */
public class Hackathon extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Hackathon";
	}

}