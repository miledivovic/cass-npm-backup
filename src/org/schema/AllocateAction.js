const schema = {};
schema.OrganizeAction = require("./OrganizeAction.js");
/**
 * Schema.org/AllocateAction
 * The act of organizing tasks/objects/events by associating resources to it.
 *
 * @author schema.org
 * @class AllocateAction
 * @module org.schema
 * @extends OrganizeAction
 */
module.exports = class AllocateAction extends schema.OrganizeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AllocateAction");
	}

}