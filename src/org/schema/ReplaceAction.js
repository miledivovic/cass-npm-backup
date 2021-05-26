const schema = {};
schema.UpdateAction = require("./UpdateAction.js");
/**
 * Schema.org/ReplaceAction
 * The act of editing a recipient by replacing an old object with a new object.
 *
 * @author schema.org
 * @class ReplaceAction
 * @module org.schema
 * @extends UpdateAction
 */
module.exports = class ReplaceAction extends schema.UpdateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ReplaceAction");
	}

	/**
	 * Schema.org/replacee
	 * A sub property of object. The object that is being replaced.
	 *
	 * @property replacee
	 * @type Thing
	 */
	replacee;

	/**
	 * Schema.org/replacer
	 * A sub property of object. The object that replaces.
	 *
	 * @property replacer
	 * @type Thing
	 */
	replacer;

}