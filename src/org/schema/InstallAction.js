const schema = {};
schema.ConsumeAction = require("./ConsumeAction.js");
/**
 * Schema.org/InstallAction
 * The act of installing an application.
 *
 * @author schema.org
 * @class InstallAction
 * @module org.schema
 * @extends ConsumeAction
 */
module.exports = class InstallAction extends schema.ConsumeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","InstallAction");
	}

}