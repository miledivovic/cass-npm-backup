/**
 * Schema.org/Hackathon
 * A [hackathon](https://en.wikipedia.org/wiki/Hackathon) event.
 *
 * @author schema.org
 * @class Hackathon
 * @module org.schema
 */
module.exports = class Hackathon extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Hackathon");
	}

}