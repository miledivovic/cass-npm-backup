const schema = {};
schema.AchieveAction = require("./AchieveAction.js");
/**
 * Schema.org/WinAction
 * The act of achieving victory in a competitive activity.
 *
 * @author schema.org
 * @class WinAction
 * @module org.schema
 * @extends AchieveAction
 */
module.exports = class WinAction extends schema.AchieveAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WinAction");
	}

	/**
	 * Schema.org/loser
	 * A sub property of participant. The loser of the action.
	 *
	 * @property loser
	 * @type Person
	 */
	loser;

}