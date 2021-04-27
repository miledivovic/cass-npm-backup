/**
 * Schema.org/Answer
 * An answer offered to a question; perhaps correct, perhaps opinionated or wrong.
 *
 * @author schema.org
 * @class Answer
 * @module org.schema
 */
module.exports = class Answer extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Answer");
	}
};
