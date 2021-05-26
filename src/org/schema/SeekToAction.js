const schema = {};
schema.Action = require("./Action.js");
/**
 * Schema.org/SeekToAction
 * This is the [[Action]] of navigating to a specific [[startOffset]] timestamp within a [[VideoObject]], typically represented with a URL template structure.
 *
 * @author schema.org
 * @class SeekToAction
 * @module org.schema
 * @extends Action
 */
module.exports = class SeekToAction extends schema.Action {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SeekToAction");
	}

}