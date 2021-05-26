const schema = {};
schema.AchieveAction = require("./AchieveAction.js");
/**
 * Schema.org/TieAction
 * The act of reaching a draw in a competitive activity.
 *
 * @author schema.org
 * @class TieAction
 * @module org.schema
 * @extends AchieveAction
 */
module.exports = class TieAction extends schema.AchieveAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TieAction");
	}

}