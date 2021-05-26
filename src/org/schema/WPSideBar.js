const schema = {};
schema.WebPageElement = require("./WebPageElement.js");
/**
 * Schema.org/WPSideBar
 * A sidebar section of the page.
 *
 * @author schema.org
 * @class WPSideBar
 * @module org.schema
 * @extends WebPageElement
 */
module.exports = class WPSideBar extends schema.WebPageElement {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WPSideBar");
	}

}