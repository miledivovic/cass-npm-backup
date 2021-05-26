const schema = {};
schema.WebPageElement = require("./WebPageElement.js");
/**
 * Schema.org/WPAdBlock
 * An advertising section of the page.
 *
 * @author schema.org
 * @class WPAdBlock
 * @module org.schema
 * @extends WebPageElement
 */
module.exports = class WPAdBlock extends schema.WebPageElement {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WPAdBlock");
	}

}