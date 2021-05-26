const schema = {};
schema.ConsumeAction = require("./ConsumeAction.js");
/**
 * Schema.org/WatchAction
 * The act of consuming dynamic/moving visual content.
 *
 * @author schema.org
 * @class WatchAction
 * @module org.schema
 * @extends ConsumeAction
 */
module.exports = class WatchAction extends schema.ConsumeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WatchAction");
	}

}