const schema = {};
schema.AssessAction = require("./AssessAction.js");
/**
 * Schema.org/ChooseAction
 * The act of expressing a preference from a set of options or a large or unbounded set of choices/options.
 *
 * @author schema.org
 * @class ChooseAction
 * @module org.schema
 * @extends AssessAction
 */
module.exports = class ChooseAction extends schema.AssessAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ChooseAction");
	}

	/**
	 * Schema.org/option
	 * A sub property of object. The options subject to this action.
	 *
	 * @property option
	 * @type Text
	 */
	option;

	/**
	 * Schema.org/actionOption
	 * A sub property of object. The options subject to this action.
	 *
	 * @property actionOption
	 * @type Thing
	 */
	actionOption;

}