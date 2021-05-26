const schema = {};
schema.Action = require("./Action.js");
/**
 * Schema.org/SearchAction
 * The act of searching for an object.\n\nRelated actions:\n\n* [[FindAction]]: SearchAction generally leads to a FindAction, but not necessarily.
 *
 * @author schema.org
 * @class SearchAction
 * @module org.schema
 * @extends Action
 */
module.exports = class SearchAction extends schema.Action {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SearchAction");
	}

	/**
	 * Schema.org/query
	 * A sub property of instrument. The query used on this action.
	 *
	 * @property query
	 * @type Text
	 */
	query;

}