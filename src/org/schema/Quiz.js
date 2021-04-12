/**
 * Schema.org/Quiz
 * Quiz: A test of knowledge, skills and abilities.
 *
 * @author schema.org
 * @class Quiz
 * @module org.schema
 */
public class Quiz extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Quiz";
	}

}