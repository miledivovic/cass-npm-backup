const schema = {};
schema.AchieveAction = require("./AchieveAction.js");
/**
 * Schema.org/LoseAction
 * The act of being defeated in a competitive activity.
 *
 * @author schema.org
 * @class LoseAction
 * @module org.schema
 * @extends AchieveAction
 */
module.exports = class LoseAction extends schema.AchieveAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LoseAction");
	}

	/**
	 * Schema.org/winner
	 * A sub property of participant. The winner of the action.
	 *
	 * @property winner
	 * @type Person
	 */
	winner;

}