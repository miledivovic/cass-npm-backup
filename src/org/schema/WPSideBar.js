/**
 * Schema.org/WPSideBar
 * A sidebar section of the page.
 *
 * @author schema.org
 * @class WPSideBar
 * @module org.schema
 */
module.exports = class WPSideBar extends EcRemoteLinkedData {
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