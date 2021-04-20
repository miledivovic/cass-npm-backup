/**
 * Schema.org/ContactPage
 * Web page type: Contact page.
 *
 * @author schema.org
 * @class ContactPage
 * @module org.schema
 */
module.exports = class ContactPage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ContactPage");
	}

}