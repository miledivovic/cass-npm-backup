const schema = {};
schema.CommunicateAction = require("./CommunicateAction.js");
/**
 * Schema.org/ShareAction
 * The act of distributing content to people for their amusement or edification.
 *
 * @author schema.org
 * @class ShareAction
 * @module org.schema
 * @extends CommunicateAction
 */
module.exports = class ShareAction extends schema.CommunicateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ShareAction");
	}

}