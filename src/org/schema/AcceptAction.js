const schema = {};
schema.AllocateAction = require("./AllocateAction.js");
/**
 * Schema.org/AcceptAction
 * The act of committing to/adopting an object.\n\nRelated actions:\n\n* [[RejectAction]]: The antonym of AcceptAction.
 *
 * @author schema.org
 * @class AcceptAction
 * @module org.schema
 * @extends AllocateAction
 */
module.exports = class AcceptAction extends schema.AllocateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AcceptAction");
	}

}