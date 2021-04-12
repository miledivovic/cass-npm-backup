/**
 * Schema.org/Answer
 * An answer offered to a question; perhaps correct, perhaps opinionated or wrong.
 *
 * @author schema.org
 * @class Answer
 * @module org.schema
 */
public class Answer extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Answer";
	}

}