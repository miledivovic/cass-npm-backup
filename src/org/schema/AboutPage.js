/**
 * Schema.org/AboutPage
 * Web page type: About page.
 *
 * @author schema.org
 * @class AboutPage
 * @module org.schema
 */
module.exports = class AboutPage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AboutPage");
	}

}