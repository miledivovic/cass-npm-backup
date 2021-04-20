/**
 * Schema.org/Quiz
 * Quiz: A test of knowledge, skills and abilities.
 *
 * @author schema.org
 * @class Quiz
 * @module org.schema
 */
module.exports = class Quiz extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Quiz");
	}

}