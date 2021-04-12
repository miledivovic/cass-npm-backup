/**
 * Schema.org/SolveMathAction
 * The action that takes in a math expression and directs users to a page potentially capable of solving/simplifying that expression.
 *
 * @author schema.org
 * @class SolveMathAction
 * @module org.schema
 */
module.exports = class SolveMathAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SolveMathAction";
	}

}