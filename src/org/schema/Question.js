const schema = {};
schema.Comment = require("./Comment.js");
/**
 * Schema.org/Question
 * A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.
 *
 * @author schema.org
 * @class Question
 * @module org.schema
 * @extends Comment
 */
module.exports = class Question extends schema.Comment {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Question");
	}

	/**
	 * Schema.org/suggestedAnswer
	 * An answer (possibly one of several, possibly incorrect) to a Question, e.g. on a Question/Answer site.
	 *
	 * @property suggestedAnswer
	 * @type Answer
	 */
	suggestedAnswer;

	/**
	 * Schema.org/answerCount
	 * The number of answers this question has received.
	 *
	 * @property answerCount
	 * @type Integer
	 */
	answerCount;

	/**
	 * Schema.org/acceptedAnswer
	 * The answer(s) that has been accepted as best, typically on a Question/Answer site. Sites vary in their selection mechanisms, e.g. drawing on community opinion and/or the view of the Question author.
	 *
	 * @property acceptedAnswer
	 * @type Answer
	 */
	acceptedAnswer;

	/**
	 * Schema.org/eduQuestionType
	 * For questions that are part of learning resources (e.g. Quiz), eduQuestionType indicates the format of question being given. Example: "Multiple choice", "Open ended", "Flashcard".
	 *
	 * @property eduQuestionType
	 * @type Text
	 */
	eduQuestionType;

}